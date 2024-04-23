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
    "lessonquestion": "What sound does a dog make?",
    "answers": ["woof", "meow", "moo", "baa"],
    "explanations": ["Woof is a sound a dog can make.", "A dog mostly woofs or barks."]
},
{
    "word": "cat",
    "questions": ["Max's ___ purrs when they are happy."],
    "imgPages": [["https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "A cat."]],
    "lessonquestion": "What sound does a cat make",
    "answers": ["meow", "woof", "baa", "moo"],
    "explanations": ["Meow is a sound a cat can make.", "A car mostly meows or purrs."]
},
{
    "word": "touch",
    "questions": ["We kept in ___ with Aunt Clara.", "Add a ___ of salt to the mix.", "Don't ___ the stray cat!", "Don't ___ the hot stove!"],
    "imgPages": [["https://images.pexels.com/photos/1712725/pexels-photo-1712725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "You touch and feel things with your hands, like a dog."], ["https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "To 'keep in touch' means to talk and catch up with someone regularly, even if they're far."], ["https://cdn.pixabay.com/photo/2021/09/14/14/17/himalayan-salt-6624128_1280.jpg", "A touch is also a little bit of something, like salt."]],
    "lessonquestion": "What don't you want to touch?",
    "answers": ["A hot fire", "A pillow", "Soft snow", "A cotton blanket"],
    "explanations": ["It would hurt to touch a fire.", "These are very nice to touch."]
},
{
    "word": "talk",
    "questions": ["I'm interested. Please ___."],
    "imgPages": [["https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "People talking to each other."]],
    "lessonquestion": "What is talking?",
    "answers": ["When you use your mouth to make words", "When you grab something", "When you follow someone", "When you run fast"],
    "explanations": ["You use your mouth to talk.", "You don't use your hands, arms, or legs to talk."]
},
{
    "word": "read",
    "questions": ["I ___ in my books every day.", "He opened the envelope and ___ the note.", "Sometimes I think my mom can ___ my mind.", "Did you ___ the news today?", "Claire searched his face, trying to ___ him."],
    "imgPages": [["https://images.pexels.com/photos/5604251/pexels-photo-5604251.jpeg?auto=compress&cs=tinysrgb&w=600", "Children reading a book."], ["https://images.pexels.com/photos/8101840/pexels-photo-8101840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Reading a person's face or mind is trying to figure out what they're feeling."]],
    "lessonquestion": "Where would you read a book?",
    "answers": ["The library", "Crossing the street", "At a birthday party", "Going down a slide"],
    "explanations": ["The library is the best place to read a book.", "You'd be too busy to read a book."]
},
{
    "word": "listen",
    "questions": ["Just ___ to what they have to say.", "She would not ___ to her parents.", "To ___ to music can be relaxing.", "Try to ___ to her advice.", "He wanted to ___ to his own heartbeat."],
    "imgPages": [["https://images.pexels.com/photos/1181368/pexels-photo-1181368.jpeg?auto=compress&cs=tinysrgb&w=600", "She listens with headphones."], ["https://images.pexels.com/photos/7078729/pexels-photo-7078729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Listening to someone also means following their directions."]],
    "lessonquestion": "When would it be important to listen?",
    "answers": ["When a teacher is talking", "Nap time", "When eating lunch", "Walking to school"],
    "explanations": ["Teachers say things for you to listen.", "When no one is talking you might not need to listen."]
},
{
    "word": "eat",
    "questions": ["This looks like a good spot to ___ lunch."],
    "imgPages": [["https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600", "Salads are healthy to eat."]],
    "lessonquestion": "What can you eat?",
    "answers": ["A sandwich", "A shoe", "A pencil", "A finger"],
    "explanations": ["Sandwiches are tasty.", "There are some things you cannot eat."]
},
{
    "word": "smile",
    "questions": ["Relief brought a ___ to her lips."],
    "imgPages": [["https://images.pexels.com/photos/774866/pexels-photo-774866.jpeg?auto=compress&cs=tinysrgb&w=600", "Smiling in a mirror"]],
    "lessonquestion": "When would you smile?",
    "answers": ["When you're happy", "When you're angry", "When you're sad", "When you're hungry"],
    "explanations": ["You smile when you're happy", "Other faces have other emotions."]
},
{
    "word": "draw",
    "questions": ["Lisa did the best she could to ___ a map on the small piece of paper."],
    "imgPages": [["https://images.pexels.com/photos/1478477/pexels-photo-1478477.jpeg?auto=compress&cs=tinysrgb&w=600", "You can draw a picture with a pencil."], ["https://images.pexels.com/photos/56850/uniform-ceremonial-red-arm-56850.jpeg?auto=compress&cs=tinysrgb&w=600", "Drawing can also mean to bring something out, like drawing a sword."]],
    "lessonquestion": "What can you draw with?",
    "answers": ["Marker", "Shoe", "Flashlight", "Clothes"],
    "explanations": ["Besides a pencil, you can draw with many other things.", "You can't draw with everyday items."]
},
{
    "word": "look",
    "questions": ["Let's go ___ at the horses."],
    "imgPages": [["https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=600", "He's looking at you!"]],
    "lessonquestion": "What do you use to look?",
    "answers": ["eyes", "fingers", "hands", "legs"],
    "explanations": ["Eyes are for looking", "These are for moving and touching"]
},
{
    "word": "cry",
    "questions": ["She wanted to scream, ___, or flee."],
    "imgPages": [["https://images.pexels.com/photos/47090/baby-tears-small-child-sad-47090.jpeg?auto=compress&cs=tinysrgb&w=600", "Babies often cry."]],
    "lessonquestion": "When would you want to cry?",
    "answers": ["If you're sad", "If you do good on a test", "If you're at the park", "If you're playing with friends"],
    "explanations": ["When bad things happen, it's ok to cry.", "Most of the time, people don't cry"]
},
{
    "word": "write",
    "questions": ["He loved poetry and soon began to ___ poems of his own."],
    "imgPages": [["https://images.pexels.com/photos/834897/pexels-photo-834897.jpeg?auto=compress&cs=tinysrgb&w=600", "Lots of people write in journals."]],
    "lessonquestion": "What can't you write",
    "answers": ["a picture", "a letter", "a poem", "a sentence"],
    "explanations": ["You can only write words.", "You can write words and other things"]
},
{
    "word": "sleep",
    "questions": ["I went to ___ last night, almost as soon as my head hit the pillow."],
    "imgPages": [["https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&w=600", "Everyone sleeps"]],
    "lessonquestion": "What time would you want to sleep?",
    "answers": ["8 o'clock", "12 o'clock", "11 o'clock", "1 o'clock"],
    "explanations": ["If it's late you should go sleep.", "You shouldn't sleep in the middle of the day."]
},
{
    "word": "night",
    "questions": ["The ___ was dark and damp."],
    "imgPages": [["https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=600", "Sometimes you can see stars at night."]],
    "lessonquestion": "What is night like?",
    "answers": ["The time when it's dark outside", "The time when you play outside in the sunshine.", "The time when you eat breakfast", "When you get picked up by the school bus"],
    "explanations": ["Nights are dark.", "Night is the opposite of day."]
},
{
    "word": "day",
    "questions": ["It was midsummer, and the ___ was very hot"],
    "imgPages": [["https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=600", "Days are bright."]],
    "lessonquestion": "What can you see during the day?",
    "answers": ["The sun", "Owls", "The moon", "Your dreams"],
    "explanations": ["The sun comes up during the day", "These things come at night."]
},
{
    "word": "home",
    "questions": ["No place is better than ___ on Christmas."],
    "imgPages": [["https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600", "Home can be a house, but it doesn't have to be."]],
    "lessonquestion": "What is home?",
    "answers": ["Where you live with your family", "Where you learn from teachers", "Where you go down slides", "Where you sit with your friends"],
    "explanations": ["Home is where your family is.", "These other places are not home."]
},
{
    "word": "family",
    "questions": ["My ___ includes my father and mother, two older brothers, and a little sister, Mildred."],
    "imgPages": [["https://images.pexels.com/photos/4205505/pexels-photo-4205505.jpeg?auto=compress&cs=tinysrgb&w=600", "A family is who you grow up with."]],
    "lessonquestion": "When would you be with your family?",
    "answers": ["At home", "At school", "In the bathroom", "At a sleepover"],
    "explanations": ["Most of the time, you're at home with your family", "There are some times when you're not with your family"]
}];

const wordToIndex = {};
for (let i in words) {
    wordToIndex[words[i]["word"]] = i; // make words to index value
}


// update lesson timer
chrome.runtime.sendMessage({ purpose: "updateLessonTimer" });


const learnedset = new Set();
const unlearnedset = new Set();
chrome.storage.local.get(["wordStates", "testFreq", "leitner", "lessonTimer", "testBool", "recommendBool"]).then((result) => { // make learned and unlearned sets from local storage

    // if no need then dont insert style
    if (result.testBool || result.recommendBool) {
        document.head.innerHTML += styleInsert;
    }

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
                            let before = "<u style='position:relative;' class='rw'><u class='word_eslhelper'>";
                            let after = "</u><div class='recommendpopup_eslhelper'><div style='font-size: 7pt;text-align: center;'>Add to recommended?</div><div class='recommendbutton_eslhelper'></div></div></u>"
                            collection[i].innerHTML = html.slice(0, j - word.length) + before + word + after + html.slice(j, html.length);
                            j += before.length + after.length;
                        }
                        word = "";
                    } else {
                        word += html[j];
                    }
                }
                let rws = collection[i].getElementsByClassName("rw"); // get all recommended words
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
                            if (result.wordStates[wordToIndex[word.innerText.toLocaleLowerCase()]] == "unlearned") {
                                result.wordStates[wordToIndex[word.innerText.toLocaleLowerCase()]] = "recommended";
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
                for (let j = 0; j < collection[i].innerHTML.length; j++) { // loop over character
                    let html = collection[i].innerHTML;
                    if (" .,?'!@#$%^&*():;<>/\"".includes(html[j])) { // a new word has ended
                        if (word != "") {
                            if (lookingFor == "") { // is it the first word found?
                                if (learnedset.has(word.toLocaleLowerCase()) && !done.has(word.toLocaleLowerCase()) && result.leitner[wordToIndex[word.toLocaleLowerCase()]][1] <= result.lessonTimer) {
                                    lookingFor = word.toLocaleLowerCase();
                                    collection[i].innerHTML = html.slice(0, j - word.length) + "_".repeat(word.length) + html.slice(j, html.length);
                                } else if (lookingFor == word.toLocaleLowerCase()) {
                                    collection[i].innerHTML = html.slice(0, j - word.length) + "_".repeat(word.length) + html.slice(j, html.length);
                                }
                            }
                        }
                        word = "";
                    } else {
                        word += html[j];
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
                    let buttontexts = collection[i].getElementsByClassName("questiontext_eslhelper");
                    let rightfeedback = collection[i].getElementsByClassName("rightanswer_eslhelper")[0];
                    let wrongfeedback = collection[i].getElementsByClassName("wronganswer_eslhelper")[0];
                    for (let k = 0; k < 4; k++) {
                        if (k == rightChoice) {
                            buttontexts[k].innerText = lookingFor;
                            buttons[k].addEventListener("click", () => {
                                rightfeedback.style.display = "flex";
                                setTimeout(() => {
                                    collection[i].innerHTML = original;
                                    chrome.runtime.sendMessage({ purpose: "updateLeitner", index: wordToIndex[lookingFor], correct: true }) // send message to update
                                }, 1000); // revert to original once question is answered
                            });
                        } else {
                            buttontexts[k].innerText = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
                            buttons[k].addEventListener("click", () => {
                                console.log("clicked right")
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
            user-select:none;
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
            display: flex;
            width: 43px;
            height: 43px;
            background-color: #8e7cc3;
            border-radius: 5px;
            border: #674ea7 2px solid;
            transition: width 0.5s, height 0.5s, background-color 0.5s, font-size 0.5s;
            margin: auto;
        }

        .recommendbutton_eslhelper:hover {
            width: 44px;
            height: 44px;
            background-color: #a190d5;
        }

        .recommendbutton_eslhelper:active {
            width: 42px;
            height: 42px;
            background-color: #7860b4;
        }

        .recommendpopup_eslhelper {
            position: absolute;
            width: 80px;
            height: 80px;
            background-color: #a190d5;
            border: 2px solid #7860b4;
            border-radius: 3px;
            display: none;
            right: calc(50% - 41px);
            top: 100%;
            justify-content: center;
            align-items: center;
            z-index: 100;
        }

        .rw {
            position: relative;
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


