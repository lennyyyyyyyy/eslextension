// global words list
const words = [{
    "word": "hello",
    "questions": ["To greet my neighbor, I told him ____."],
    "imgPages": [["https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "You wave when you say hello."]],
    "lessonquestion": "When would you say hello to someone?",
    "answers": ["When you see them in the morning", "When school ends", "When they go to the store", "When they go to bed"],
    "explanations": ["You say hello when you first see a person.", "You don't say hello when a person is leaving."]
},
{
    "word": "dog",
    "questions": ["I love it when Sam's ____ barks at me!"],
    "imgPages": [["https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "A dog."]],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "cat",
    "questions": ["Max's ___ purrs when they are happy."],
    "imgPages": [["https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "A cat."]],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "talk",
    "questions": ["I'm interested. Please ___."],
    "imgPages": [["https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "People talking to each other."]],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "read",
    "questions": ["I ___ in my books every day."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "listen",
    "questions": ["Just ___ to what they have to say."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "eat",
    "questions": ["This looks like a good spot to ___ lunch."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "smile",
    "questions": ["Relief brought a ___ to her lips."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "draw",
    "questions": ["Lisa did the best she could to ___ a map on the small piece of paper."],
    "imgPages": [["https://images.pexels.com/photos/1478477/pexels-photo-1478477.jpeg?auto=compress&cs=tinysrgb&w=600", "You can draw a picture with a pencil."], ["https://images.pexels.com/photos/56850/uniform-ceremonial-red-arm-56850.jpeg?auto=compress&cs=tinysrgb&w=600", "Drawing can also mean to bring something out, like drawing a sword."]],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "look",
    "questions": ["Let's go ___ at the horses."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "cry",
    "questions": ["She wanted to scream, ___, or flee."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "write",
    "questions": ["He loved poetry and soon began to ___ poems of his own."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "sleep",
    "questions": ["I went to ___ last night, almost as soon as my head hit the pillow."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "night",
    "questions": ["The ___ was dark and damp."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "day",
    "questions": ["It was midsummer, and the ___ was very hot"],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "home",
    "questions": ["I suppose no place is better than ___ on Christmas."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
},
{
    "word": "family",
    "questions": ["My ___ has my father and mother, two older brothers, and a little sister, Mildred."],
    "imgPages": [],
    "lessonquestion": "filler",
    "answers": ["filler", "filler", "filler", "filler"],
    "explanations": ["filler", "filler"]
}];

const wordToIndex = {};
for (let i in words) {
    wordToIndex[words[i]["word"]] = i; // make words to index value
}

const learnedset = new Set();
const unlearnedset = new Set();
chrome.storage.local.get(["wordStates", "testFreq", "leitner", "lessonTimer", "testBool", "recommendBool"]).then((result) => { // make learned and unlearned sets from local storage
    for (let i in words) {
        if (result.wordStates[i] == "learned") {
            learnedset.add(words[i]["word"]);
        } else if (result.wordStates[i] == "unlearned") {
            unlearnedset.add(words[i]["word"]);
        }
    }

    const collection = document.querySelectorAll("p"); // get all paragraphs

    // recommend or not
    if (result.recommendBool) {
        // unlearned words are highlighted in case you want to learn
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].innerText != undefined && collection[i].innerText.length > 0) {
                let word = "";
                for (let j = 0; j < collection[i].innerHTML.length; j++) {
                    let html = collection[i].innerHTML;
                    if (" .,?'!@#$%^&*():;<>/\"".includes(html[j])) {
                        if (word != "" && unlearnedset.has(word.toLocaleLowerCase())) {
                            collection[i].innerHTML = html.slice(0, j - word.length) + "<u class='rw'>" + word + "<div class='recommendbutton_eslhelper'></div></u>" + html.slice(j, html.length);
                            j += 53;
                        }
                        word = "";
                    } else {
                        word += html[j];
                    }
                }
                let rws = collection[i].getElementsByClassName("rw"); // get all recommended words
                for (let rw of rws) {
                    let button = rw.getElementsByClassName("recommendbutton_eslhelper")[0];
                    button.addEventListener("click", () => { // for each button, if clicked recommend that word
                        chrome.storage.local.get("wordStates").then((result) => {
                            if (result.wordStates[wordToIndex[rw.innerText.toLocaleLowerCase()]] == "unlearned") {
                                result.wordStates[wordToIndex[rw.innerText.toLocaleLowerCase()]] = "recommended";
                            }
                            chrome.storage.local.set({ wordStates: result.wordStates });
                            button.remove(); // destroy button
                        })
                    })
                }
            }
        }
    }
    // test or not?
    if (result.testBool) {
        let done = new Set(); // no repeat questions
        // learned words are tested on
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].innerText != undefined && collection[i].innerText.length > 0 && Math.random() < (result.testFreq / 100)) { // chance of paragraph selected
                let original = collection[i].innerHTML;
                let word = "";
                let lookingFor = "";
                for (let j = 0; j < collection[i].innerText.length; j++) { // loop over character
                    let text = collection[i].innerText;
                    if (" .,?'!@#$%^&*():;<>/\"".includes(text[j])) { // a new word has ended
                        if (word != "") {
                            if (lookingFor == "") { // is it the first word found?
                                if (learnedset.has(word.toLocaleLowerCase()) && !done.has(word.toLocaleLowerCase()) && result.leitner[wordToIndex[word.toLocaleLowerCase()]][1] <= result.lessonTimer) {
                                    lookingFor = word.toLocaleLowerCase();
                                    collection[i].innerText = text.slice(0, j - word.length) + "_".repeat(word.length) + text.slice(j, text.length);
                                } else if (lookingFor == word.toLocaleLowerCase()) {
                                    collection[i].innerText = text.slice(0, j - word.length) + "_".repeat(word.length) + text.slice(j, text.length);
                                }
                            }
                        }
                        word = "";
                    } else {
                        word += text[j];
                    }
                }
                if (lookingFor != "") { // question to fill blanks
                    done.add(lookingFor);
                    collection[i].innerHTML += insert;

                    let set = new Set(learnedset); //clone set
                    set.delete(lookingFor);
                    let wrongAnswers = [];
                    set.forEach((value, key, set) => { wrongAnswers.push(value) }); // add all to wrongAnswers


                    let rightChoice = Math.floor(Math.random() * 4)

                    let buttons = collection[i].getElementsByClassName("question_eslhelper");
                    console.log(buttons);
                    let buttontexts = collection[i].getElementsByClassName("questiontext_eslhelper");
                    let rightfeedback = collection[i].getElementsByClassName("rightanswer_eslhelper")[0];
                    let wrongfeedback = collection[i].getElementsByClassName("wronganswer_eslhelper")[0];
                    for (let j = 0; j < 4; j++) {
                        if (j == rightChoice) {
                            buttontexts[j].innerText = lookingFor;
                            buttons[j].addEventListener("click", () => {
                                rightfeedback.style.display = "flex";
                                setTimeout(() => {
                                    collection[i].innerHTML = original;
                                    chrome.runtime.sendMessage({ purpose: "updateLeitner", index: wordToIndex[lookingFor], correct: true }) // send message to update 
                                }, 1000); // revert to original once question is answered
                            });
                        } else {
                            buttontexts[j].innerText = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
                            buttons[j].addEventListener("click", () => {
                                wrongfeedback.style.display = "flex";
                                setTimeout(() => {
                                    collection[i].innerHTML = original;
                                    chrome.runtime.sendMessage({ purpose: "updateLeitner", index: wordToIndex[lookingFor], correct: false }) // send message to update 
                                }, 1000); // revert to original once question is answered
                            });
                        }
                    }
                }
            }
        }
    }

    // if no need then dont insert style
    if (result.testBool || result.recommendBool) {
        document.body.innerHTML += styleInsert;
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

let styleInsert = `
    <style> 
        .lessonquestion_eslhelper {
            margin-top: 10px;
            text-align: center;
            font-size: 10pt;
        }
        .insertedquestion_eslhelper {
            width: 300px;
            height: 300px;
            background-color: #f3f3f3;
            border: 3px #a190d5 solid;
            position: relative;
        }
        .question_eslhelper {
            width: 90%;
            display: flex;
            margin:auto;
            height: 90%;
            background-color: #8e7cc3;
            border-radius: 8px;
            border: #674ea7 3px solid;
            transition: width 0.5s, height 0.5s, background-color 0.5s, font-size 0.5s;
            justify-content: center;
            align-items: center;
            font-size: 12pt;
        }

        .question_eslhelper:hover {
            width: 95%;
            height: 95%;
            background-color: #a190d5;
            font-size: 13pt;
        }

        .question_eslhelper:active {
            width: 89%;
            height: 89%;
            background-color: #7860b4;
            font-size: 11pt;
            transition: width 0.3s, height 0.3s, background-color 0.3s, font-size 0.3s;
        }

        .choicesbox_eslhelper {
            width: 90%;
            height: 80%;
            margin: 10px auto;
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
        }

        .answerfeedback_eslhelper {
            height: 100%;
            width: 100%;
            display: none;
            position: absolute;
            top: 0%;
            align-items: center;
            justify-content: center;
            font-size: 30pt;
            font-family: system-ui;
        }

        .rightanswer_eslhelper {
            background-color: lightgreen;
        }

        .wronganswer_eslhelper {
            background-color: pink;
        }
        .recommendbutton_eslhelper {
            width: 16px;
            display: inline-block;
            margin: 0px 3px -4px 3px;
            height: 16px;
            background-color: #8e7cc3;
            border-radius: 2px;
            border: #674ea7 1px solid;
            transition: width 0.5s, height 0.5s, background-color 0.5s, font-size 0.5s;
        }

        .recommendbutton_eslhelper:hover {
            width: 16.5px;
            height: 16.5px;
            background-color: #a190d5;
        }

        .recommendbutton_eslhelper:active {
            width: 15.5px;
            height: 15.5px;
            background-color: #7860b4;
        }
    </style>
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
