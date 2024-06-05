fetch("words.json").then((result) => { return result.json(); }).then((words) => {



    // update lesson timer
    chrome.runtime.sendMessage({ purpose: "updateLessonTimer" });


    // replaces all occurences of a word in an element with some html, making sure it never replaces part of actual html tags and only inside other child elements
    function replaceWordInElement(element, word, html) {
        const regex = new RegExp(`(?![^<>]*>)\\b${word}\\b`, 'gi');
        const childNodes = element.childNodes;
        
        for (let i = 0; i < childNodes.length; i++) {
            const node = childNodes[i];
            
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                const replacedText = text.replace(regex, html);
                
                if (replacedText !== text) {
                    const newNode = document.createElement('span');
                    newNode.innerHTML = replacedText;
                    element.replaceChild(newNode, node);
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                replaceWordInElement(node, word, html);
            }
        }
    }


    const learnedset = new Set();
    const unlearnedset = new Set();
    chrome.storage.local.get(["wordStates", "testFreq", "leitner", "lessonTimer", "testBool", "recommendBool"]).then((result) => { // make learned and unlearned sets from local storage


        for (const [key, value] of Object.entries(words)) {
            if (value == "learned") {
                learnedset.add(key);
            } else if (value == "unlearned") {
                unlearnedset.add(key);
            }
        }

        // recommend or not
        if (result.recommendBool) {
            // unlearned words are highlighted in case you want to learn
            if (document.innerText != undefined && document.innerText.length > 0) {
                // replace unlearned words so they can be recommended
                unlearnedset.forEach((value, key, set) => {
                    replaceWordInElement(document, value, "<u style='position:relative;' class='rw_eslhelper'><u class='word_eslhelper'>" + value + "</u><div class='recommendpopup_eslhelper'><div style='font-size: 7pt;text-align: center;'>Add to recommended?</div><div class='recommendbutton_eslhelper'></div></div></u>")
                })
                let rws = document.getElementsByClassName("rw_eslhelper"); // get all recommended words
                for (let rw of rws) {
                    let word = rw.getElementsByClassName("word_eslhelper")[0];
                    let popup = rw.getElementsByClassName("recommendpopup_eslhelper")[0];
                    let button = rw.getElementsByClassName("recommendbutton_eslhelper")[0];
                    // dissapearing when hovering and exiting word and popup
                    rw.addEventListener("mouseover", () => {
                        popup.style.display = "block";
                    })
                    rw.addEventListener("mouseout", () => {
                        popup.style.display = "none";
                    })
                    button.addEventListener("click", () => {
                        chrome.storage.local.get("wordStates").then((result) => {
                            if (result.wordStates[word.innerText.toLocaleLowerCase()] == "unlearned") {
                                result.wordStates[word.innerText.toLocaleLowerCase()] = "recommended";
                            }
                            chrome.storage.local.set({ wordStates: result.wordStates });
                            // make normal, removing popup and eventlisteners
                            popup.remove();
                            rw.replaceWith(rw.cloneNode(true));
                        })
                    })
                }
            }
        }
        // test or not?
        if (result.testBool && learnedset.size >= 4) {
            // selects the most frequent learned word
            var maxWord = "";
            var maxOccurences = 0;
            learnedset.forEach((value, key, set) => {
                var matches = document.querySelectorAll("html")[0].innerHTML.match(new RegExp("(?![^<>]*>)\\b" + value + "\\b", "gi"));
                if (matches != null && matches.length > maxOccurences) {
                    maxWord = value;
                    maxOccurences = matches.length;
                }
            })
            if (maxWord != "" && result.leitner[maxWord][0] < 9 && result.leitner[maxWord][1] <= result.lessonTimer && Math.random() < (result.testFreq / 100)) { // chance of question
                var origHTML = $("body").html();
                $("body").append(insert);
                replaceWordInElement(document.body, maxWord, "<span class='blank_eslhelper'>" +"_".repeat(maxWord.length) + "</span>");
                $(".blank_eslhelper").on({
                    mouseenter: (event) => {
                        $(".insertedquestion_eslhelper").show();
                        $(".insertedquestion_eslhelper").css("top", $(event.delegateTarget).offset().top + $(event.delegateTarget).height());
                        $(".insertedquestion_eslhelper").css("left", $(event.delegateTarget).offset().left + $(event.delegateTarget).width() / 2 - $(".insertedquestion_eslhelper").width() / 2);
                    },
                    mouseleave: () => {
                        $(".insertedquestion_eslhelper").hide();
                    }
                });
                $(".insertedquestion_eslhelper").on({
                    mouseleave: () => {
                        $(".insertedquestion_eslhelper").hide();
                    },
                    mouseenter: () => {
                        $(".insertedquestion_eslhelper").show();
                    }
                })
                let wrongAnswers = new Set(learnedset); // clone set
                wrongAnswers.delete(maxWord);


                let rightChoice = Math.floor(Math.random() * 4)
                let buttons = document.getElementsByClassName("question_eslhelper");
                let buttontexts = document.getElementsByClassName("questiontext_eslhelper");
                let rightfeedback = document.getElementsByClassName("rightanswer_eslhelper")[0];
                let wrongfeedback = document.getElementsByClassName("wronganswer_eslhelper")[0];
                for (let k = 0; k < 4; k++) {
                    if (k == rightChoice) {
                        buttontexts[k].innerText = maxWord;
                        buttons[k].addEventListener("click", () => {
                            rightfeedback.style.display = "flex";
                            setTimeout(() => {
                                $("body").html(origHTML);
                                chrome.runtime.sendMessage({ purpose: "updateLeitner", word: maxWord, correct: true }) // send message to update
                            }, 1000); // revert to original once question is answered
                        });
                    } else {
                        let wronganswer = [...wrongAnswers][Math.floor(Math.random() * wrongAnswers.size)]; // spread set into array and select randmo value
                        buttontexts[k].innerText = wronganswer;
                        wrongAnswers.delete(wronganswer); // no dupe answers
                        buttons[k].addEventListener("click", () => {
                            wrongfeedback.style.display = "flex";
                            setTimeout(() => {
                                $("body").html(origHTML);
                                chrome.runtime.sendMessage({ purpose: "updateLeitner", word: maxWord, correct: false }) // send message to update
                            }, 1000); // revert to original once question is answered
                        });
                    }
                }
            }
        }
    });

    let insert = `
        <div class="insertedquestion_eslhelper">
            <div class="lessonquestion_eslhelper">What word fills in the blank?</div>
            <div class="choicesbox_eslhelper">
                <div class="question_eslhelper">
                    <div class="questiontext_eslhelper"></div>
                </div>
                <div class="question_eslhelper">
                    <div class="questiontext_eslhelper"></div>
                </div>
                <div class="question_eslhelper">
                    <div class="questiontext_eslhelper"></div>
                </div>
                <div class="question_eslhelper">
                    <div class="questiontext_eslhelper"></div>
                </div>
            </div>
            <div class="answerfeedback_eslhelper rightanswer_eslhelper"><h2>Correct!</h2></div>
            <div class="answerfeedback_eslhelper wronganswer_eslhelper"><h2>Incorrect!</h2></div>
        </div>
    `


    // play audio through context menus
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.purpose == "playAudio") {
            console.log("request recieved")
            let newAudio = document.createElement("audio");
            newAudio.src = request.src;
            newAudio.autoplay = true;
            document.body.appendChild(newAudio);
            newAudio.addEventListener("ended", () => {
                newAudio.remove();
            })
        }
    })

})
