// global words list
const words = [{
    "word": "hello",
    "questions": ["To greet my neighbor, I told him ____.", "___, can I help you with something?", "Say ___ to your teacher in the morning.", "___ everyone, I am your new school nurse.", "It's nice to say ___ to people."],
    "imgPages": [["https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "You wave when you say hello."]],
    "lessonquestion": "When would you say hello to someone?",
    "answers": ["When you see them in the morning", "When school ends", "When they go to the store", "When they go to bed"],
    "explanations": ["You say hello when you first see a person.", "You don't say hello when a person is leaving."]
},
{
    "word": "dog",
    "questions": ["I love it when Sam's ____ barks at me!", "My ___ scared the squirrels away.", "Some ___s help watch and herd sheep.", "His dad loves walking my ___.", "Her ___ is so big and scary when it barks."],
    "imgPages": [["https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "A dog."]],
    "lessonquestion": "What sound does a dog make?",
    "answers": ["woof", "meow", "moo", "baa"],
    "explanations": ["Woof is a sound a dog can make.", "A dog mostly woofs or barks."]
},
{
    "word": "cat",
    "questions": ["Max's ___ purrs when they are happy.", "___s usually like sitting in high places.", "Meow is a sound a ___ makes.", "___s are known for chasing mice.", "Black ___s can be spooky."],
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
    "questions": ["This looks like a good spot to ___ lunch.", "She said she wants to ___ french fries today.", "He loves to ___ all the time.", "You're ___ing too much cake!", "___ slowly, so the food will last longer."],
    "imgPages": [["https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600", "Salads are healthy to eat."]],
    "lessonquestion": "What can you eat?",
    "answers": ["A sandwich", "A shoe", "A pencil", "A finger"],
    "explanations": ["Sandwiches are tasty.", "There are some things you cannot eat."]
},
{
    "word": "smile",
    "questions": ["Relief brought a ___ to her lips.", " I always ___ when it's sunny.", "A ___ is a gift to your friends.", "My dog always ___s when I take him outside.", "It's picture day, so remember to ___."],
    "imgPages": [["https://images.pexels.com/photos/774866/pexels-photo-774866.jpeg?auto=compress&cs=tinysrgb&w=600", "Smiling in a mirror"]],
    "lessonquestion": "When would you smile?",
    "answers": ["When you're happy", "When you're angry", "When you're sad", "When you're hungry"],
    "explanations": ["You smile when you're happy", "Other faces have other emotions."]
},
{
    "word": "draw",
    "questions": ["Lisa did the best she could to ___ a map on the small piece of paper.", "Trying to ___ hands is really hard.", "The knight went to ___ his sword.", "She quickly tried to ___ her hand away.", "___ings can be really beautiful and colorful."],
    "imgPages": [["https://images.pexels.com/photos/1478477/pexels-photo-1478477.jpeg?auto=compress&cs=tinysrgb&w=600", "You can draw a picture with a pencil."], ["https://images.pexels.com/photos/56850/uniform-ceremonial-red-arm-56850.jpeg?auto=compress&cs=tinysrgb&w=600", "Drawing can also mean to bring something out, like drawing a sword."]],
    "lessonquestion": "What can you draw with?",
    "answers": ["Marker", "Shoe", "Flashlight", "Clothes"],
    "explanations": ["Besides a pencil, you can draw with many other things.", "You can't draw with everyday items."]
},
{
    "word": "look",
    "questions": ["Let's go ___ at the horses.", "Don't ___ at me with that face.", "Your shoes ___ so dirty!", "___ at the time every once in a while.", "It's nice to ___ up at the stars at night."],
    "imgPages": [["https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=600", "He's looking at you!"]],
    "lessonquestion": "What do you use to look?",
    "answers": ["eyes", "fingers", "hands", "legs"],
    "explanations": ["Eyes are for looking", "These are for moving and touching"]
},
{
    "word": "cry",
    "questions": ["She wanted to scream, ___, or flee.", "She almost started to ___ after she fell.", "Babies ___ almost every day.", "It's embarrassing to ___ in front of other people.", "He was so scared he started to ___ for help."],
    "imgPages": [["https://images.pexels.com/photos/47090/baby-tears-small-child-sad-47090.jpeg?auto=compress&cs=tinysrgb&w=600", "Babies often cry."], ["https://images.pexels.com/photos/2868257/pexels-photo-2868257.jpeg?auto=compress&cs=tinysrgb&w=600", "To cry can also mean to shout, like in 'crying for help'."]],
    "lessonquestion": "When would you want to cry?",
    "answers": ["If you're sad", "If you do good on a test", "If you're at the park", "If you're playing with friends"],
    "explanations": ["When bad things happen, it's ok to cry.", "Most of the time, people don't cry"]
},
{
    "word": "write",
    "questions": ["He loved poetry and soon began to ___ poems of his own.", "I can speak and ___ more than 5 languages.", "Most people have trouble ___ing with their left hand.", "___ letters to me once in a while.", "___ things down so you don't forget."],
    "imgPages": [["https://images.pexels.com/photos/834897/pexels-photo-834897.jpeg?auto=compress&cs=tinysrgb&w=600", "Lots of people write in journals."]],
    "lessonquestion": "What can't you write",
    "answers": ["a picture", "a letter", "a poem", "a sentence"],
    "explanations": ["You can only write words.", "You can write words and other things"]
},
{
    "word": "sleep",
    "questions": ["I went to ___ last night, almost as soon as my head hit the pillow.", "___ tight, don't let the bed bugs bite.", "I'm tired after school, so I go to ___ right after.", "Sometimes nightmares come during ___.", "___ is when your brain gets to reset."],
    "imgPages": [["https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&w=600", "Everyone sleeps"]],
    "lessonquestion": "What time would you want to sleep?",
    "answers": ["8 o'clock", "12 o'clock", "11 o'clock", "1 o'clock"],
    "explanations": ["If it's late you should go sleep.", "You shouldn't sleep in the middle of the day."]
},
{
    "word": "night",
    "questions": ["The ___ was dark and damp.", "It's dangerous to go out at ___.", "He could see the sunset, so he knew ___ was coming.", "I finished all my homework last ___.", "It was scary and stormy yesterday ___."],
    "imgPages": [["https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=600", "Sometimes you can see stars at night."]],
    "lessonquestion": "What is night like?",
    "answers": ["The time when it's dark outside", "The time when you play outside in the sunshine.", "The time when you eat breakfast", "When you get picked up by the school bus"],
    "explanations": ["Nights are dark.", "Night is the opposite of day."]
},
{
    "word": "day",
    "questions": ["It was midsummer, and the ___ was very hot", "Each ___ has 24 hours.", "He played with his friends the whole ___.", "Each ___, there is a new sun.", "All this math homework will take me the entire ___."],
    "imgPages": [["https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=600", "Days are bright."]],
    "lessonquestion": "What can you see during the day?",
    "answers": ["The sun", "Owls", "The moon", "Your dreams"],
    "explanations": ["The sun comes up during the day", "These things come at night."]
},
{
    "word": "home",
    "questions": ["No place is better than ___ on Christmas.", "It's normal to miss ___ when you're at school.", "It might be hard to walk ___ from school during the winter.", "A school bus takes you ___ at the end of the day.", "Don’t answer the door when you are alone at ___."],
    "imgPages": [["https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600", "Home can be a house, but it doesn't have to be."]],
    "lessonquestion": "What is home?",
    "answers": ["Where you live with your family", "Where you learn from teachers", "Where you go down slides", "Where you sit with your friends"],
    "explanations": ["Home is where your family is.", "These other places are not home."]
},
{
    "word": "family",
    "questions": ["My ___ includes my father and mother, two older brothers, and a little sister, Mildred.", "His whole ___ went to see his concert.", "She went to visit ___ over the summer.", "Some people consider pets as ___.", "He is almost like ___ to me."],
    "imgPages": [["https://images.pexels.com/photos/4205505/pexels-photo-4205505.jpeg?auto=compress&cs=tinysrgb&w=600", "A family is who you grow up with."]],
    "lessonquestion": "When would you be with your family?",
    "answers": ["At home", "At school", "In the bathroom", "At a sleepover"],
    "explanations": ["Most of the time, you're at home with your family", "There are some times when you're not with your family"]
} ];


// pregenerate all lessons
const lessons = [];

const lessontemplate = document.getElementsByClassName("lessontemplate")[0];
const definitiontemplate = document.getElementsByClassName("definitiontemplate")[0];
const imagetemplate = document.getElementsByClassName("imagetemplate")[0];
let activeLessonPage = 0;

function popup(element) { // popups for right and wrong answer for 1 sec
    element.style.top = "89%";
    setTimeout(() => { element.style.top = "100%" }, 1000);
}

// pregenerate lessons
let page = 0;
const wordgridcontainer = document.getElementById("wordgridcontainer");
// pregenerate lessons
for (let index = 0; index < words.length; index++) { // for every word

    // generate lesson for each button
    let wordData = words[index];
    let clone = lessontemplate.cloneNode(true);
    clone.getElementsByClassName("lessonword")[0].innerText = wordData["word"]; // lesson word on first page
    let firstPage = clone.getElementsByClassName("lessonpage")[0];
    let addedPages = [];
    // MEANINGS
    // for (let meaning of json["meanings"]) { // another page for every meaning
    //     let def = definitiontemplate.cloneNode(true);
    //     def.style.display = "";
    //     def.getElementsByClassName("header")[0].innerText = meaning["partOfSpeech"];
    //     let defbox = def.getElementsByClassName("definitions")[0];
    //     for (let definition of meaning["definitions"]) {
    //         defbox.innerText += definition["definition"] + "\nex: " + definition["example"] + "\n\n";
    //     }
    //     firstPage.after(def); // add each meaning page after the first
    // }
    // IMAGES
    for (let i = 0; i < wordData["imgPages"].length; i++) {
        let imagePage = imagetemplate.cloneNode(true);
        imagePage.getElementsByClassName("lessonimage")[0].src = wordData["imgPages"][i][0]; // add image src
        imagePage.getElementsByClassName("imgdesc")[0].innerText = wordData["imgPages"][i][1];
        imagePage.style.display = ""; // template is invisible, display it
        addedPages.push(imagePage); // insert page
    }
    // AUDIO
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordData["word"]).then((result) => { return result.json() }).then((result) => {
        if (result[0] != undefined) {
            for (let i = 0; i < result[0]["phonetics"].length; i++) {
                if (result[0]["phonetics"][i]["audio"] != undefined && result[0]["phonetics"][i]["audio"] != "") {
                    clone.getElementsByClassName("lessonaudio")[0].src = result[0]["phonetics"][i]["audio"];
                    break;
                }
            }
        }
    });
    // TEST QUESTION
    let question = clone.getElementsByClassName("lessonquestion")[0];
    question.innerText = wordData["lessonquestion"];
    let rightChoice = Math.floor(Math.random() * 4); // random right answer
    let wrongAnswers = [0, 1, 2, 3];
    wrongAnswers.splice(rightChoice, 1);
    let buttons = clone.getElementsByClassName("question");
    let buttontexts = clone.getElementsByClassName("questiontext");
    let explanations = clone.getElementsByClassName("explanation");
    let answerfeedbacks = clone.getElementsByClassName("answerfeedback");
    explanations[0].innerText = wordData["explanations"][1]; // explain wrong answer
    explanations[1].innerText = wordData["explanations"][0]; // explain right answer
    for (let i = 0; i < 3; i++) {
        let button = buttons[wrongAnswers[i]];
        buttontexts[wrongAnswers[i]].innerText = wordData["answers"][i + 1]; // put text as one of the wrong answers
        button.addEventListener("click", () => {
            button.style["background-color"] = "pink"; // change background to red for wrong answer
            popup(answerfeedbacks[0]); // show wrong answer explanation
        });
    }
    let rightButton = buttons[rightChoice];
    buttontexts[rightChoice].innerText = wordData["answers"][0]; // put right answer
    rightButton.addEventListener("click", () => {
        rightButton.style["background-color"] = "lightgreen"; // change background to green for right answer
        popup(answerfeedbacks[1]); // show right answer explanation
    });

    // add pages in reverse order
    for (let i = addedPages.length - 1; i >= 0; i--) {
        firstPage.after(addedPages[i]);
    }


    // 
    let pages = clone.getElementsByClassName("lessonpage"); // get all pages
    let maxPage = pages.length - 1;
    document.body.appendChild(clone);
    clone.getElementsByClassName("exit button")[0].addEventListener("click", () => {
        clone.style.display = "none";
    }); // exits lesson
    function updatePages() {
        for (let i = 0; i <= maxPage; i++) {
            if (i < activeLessonPage) {
                pages[i].style.left = "-100%";
            } else if (i > activeLessonPage) {
                pages[i].style.left = "100%";
            } else {
                pages[i].style.left = "0%";
            }
        }
    }
    updatePages(0);
    clone.getElementsByClassName("scroll button")[0].addEventListener("click", () => {
        activeLessonPage = Math.max(0, activeLessonPage - 1);
        updatePages();
    });
    clone.getElementsByClassName("scroll button")[1].addEventListener("click", () => {
        activeLessonPage = Math.min(maxPage, activeLessonPage + 1);
        updatePages();
    });
    clone.getElementsByClassName("finish button")[0].addEventListener("click", () => { // finishing a lesson
        chrome.storage.local.get(["wordStates", "leitner", "lessonTimer"]).then((result) => {
            if (result.leitner[index][0] == -1) { // add new word to leitner along with time added
                result.leitner[index] = [0, result.lessonTimer];
            }
            result.wordStates[index] = "learned";
            chrome.storage.local.set({ wordStates: result.wordStates });
            chrome.storage.local.set({ leitner: result.leitner });
            updateWordPage(); // changed unlearned to learned when finished
        });
        clone.style.display = "none";
    });
    lessons.push(clone);
}
let filter = false;
let state = "";
let sortbuttons = document.getElementsByClassName("sort"); // change filter states for each button clicked, and update
sortbuttons[0].addEventListener("click", () => {
    filter = false;
    page = 0;
    updateWordPage();
})
sortbuttons[1].addEventListener("click", () => {
    filter = true;
    state = "unlearned";
    page = 0;
    updateWordPage();
})
sortbuttons[2].addEventListener("click", () => {
    filter = true;
    state = "recommended";
    page = 0;
    updateWordPage();
})
sortbuttons[3].addEventListener("click", () => {
    filter = true;
    state = "learned";
    page = 0;
    updateWordPage();
})
const lessonstates = wordcelltemplates.getElementsByClassName("lessonstate"); // change templates, so they can be copied later
function updateWordPage() {
    chrome.storage.local.get("wordStates").then((result) => {
        // clear container
        wordgridcontainer.innerHTML = "";
        // generate grids of 16
        let count = 0;
        let currentwordgrid;
        for (let i = 0; i < words.length; i++) {
            if (!filter || result.wordStates[i] == state) { // passes filter
                if (count == 0) {
                    currentwordgrid = document.createElement("div");
                    currentwordgrid.classList = "wordgrid";
                    wordgridcontainer.appendChild(currentwordgrid);
                }
                count = (count + 1) % 16;
                let child = document.createElement("div"); // create wordcell button
                child.classList = "wordcell button";
                let b = document.createElement("b");
                b.innerText = words[i]["word"]; // word for each cell
                let lessonstate = document.createElement("div");
                lessonstate.classList = "lessonstate"; // bubble in the corner
                // fill in learned or not learned in each cell
                if (result.wordStates[i] == "learned") {
                    lessonstate.style["background-color"] = "lightgreen";
                } else if (result.wordStates[i] == "unlearned") {
                    lessonstate.style["background-color"] = "pink";
                } else if (result.wordStates[i] == "recommended") {
                    lessonstate.style["background-color"] = "lightyellow"
                }
                child.appendChild(b);
                child.appendChild(lessonstate);
                currentwordgrid.appendChild(child) // put in current grid
                child.addEventListener("click", () => { // when clicked on corresponding lesson button
                    lessons[i].style.display = "block"; // show lesson

                    // reset lesson things such as going to first page, resetting test question colors
                    activeLessonPage = 0;
                    updatePages();
                    for (let j = 0; j < 4; j++) {
                        lessons[i].getElementsByClassName("question")[j].style["background-color"] = "var(--lightpurple)";
                    }
                });
            }
        }
        updateScroll();
    });
}
function updateScroll() {
    let wordgrids = document.getElementsByClassName("wordgrid");
    for (let i = 0; i < wordgrids.length; i++) { // move pages left and right
        if (i < page) {
            wordgrids[i].style.left = "-100%";
        } else if (i == page) {
            wordgrids[i].style.left = "0%";
        } else {
            wordgrids[i].style.left = "100%";
        }
    }
}
const wordscroll = document.getElementsByClassName("lesson scroll button");
updateWordPage();
// scroll left 
wordscroll[0].addEventListener("click", () => {
    page = Math.max(0, page - 1);
    updateScroll();
});
// scroll right
wordscroll[1].addEventListener("click", () => {
    page = Math.min(document.getElementsByClassName("wordgrid").length - 1, page + 1);
    updateScroll();
});






setInterval(() => { chrome.runtime.sendMessage({ purpose: "updateLessonTimer" }) }, 60000) // updates lesson timer every min;

const wordstate = [];
for (let i in words) {
    wordstate.push("unlearned");
}

const defLeitner = [];
for (let i = 0; i < words.length; i++) {
    defLeitner.push([-1, -1]);
}

function resetDefaults() {
    chrome.storage.local.set({ wordStates: wordstate });
    chrome.storage.local.set({ leitner: defLeitner });
    chrome.storage.local.set({ lessonTimer: 0 });
    chrome.storage.local.set({ testFreq: 10 });
    chrome.storage.local.set({ testBool: false });
    chrome.storage.local.set({ recommendBool: false });
}
document.getElementById("reset").addEventListener("click", resetDefaults);


// directs 4 main buttons to screen and exit buttons back out
const mainbuttons = document.getElementsByClassName("main button");
const maintabs = document.getElementsByClassName("main tab");
const tomainexitbuttons = document.getElementsByClassName("tomain exit button");
for (let i = 0; i < 4; i++) {
    mainbuttons[i].addEventListener("click", () => {
        maintabs[i].style.display = "block";
    });
    tomainexitbuttons[i].addEventListener("click", () => {
        maintabs[i].style.display = "none";
    });
}











let vocabpage = 0;
const vocabscroll = document.getElementsByClassName("vocab scroll button");
const vocabgroups = document.getElementsByClassName("vocabgroup");
const vocablists = document.getElementsByClassName("vocablist");

function updateVocabPage() {
    for (let i = 0; i < 5; i++) {
        if (i == vocabpage) {
            vocablists[i].innerHTML = '';
            chrome.storage.local.get("leitner").then((result) => {
                for (let j = 0; j < result.leitner.length; j++) {
                    if (result.leitner[j][0] == 2 * i || result.leitner[j][0] == 2 * i + 1) {
                        let child = document.createElement("div");
                        child.classList = "vocabword";
                        child.innerText = words[j]["word"];
                        vocablists[i].appendChild(child);
                    }
                }
            });
            vocabgroups[i].style.display = "inline-block";
        } else {
            vocabgroups[i].style.display = "none";
        }
    }
}
mainbuttons[1].addEventListener("click", () => {
    updateVocabPage(0);
    vocabpage = 0;
});
vocabscroll[0].addEventListener("click", () => {
    vocabpage = Math.max(0, vocabpage - 1);
    updateVocabPage();
});
vocabscroll[1].addEventListener("click", () => {
    vocabpage = Math.min(4, vocabpage + 1);
    updateVocabPage();
});


// clicking on "practice" tab
const question = document.getElementById("question");
const choices = maintabs[2].getElementsByClassName("question button");

const notestpopup = document.getElementById("notestpopup");
function newQuestion() {
    chrome.storage.local.get(["leitner", "lessonTimer"]).then((result) => {
        for (let i = 0; i < result.leitner.length; i++) { // loop through leitner
            if (result.leitner[i][1] <= result.lessonTimer && result.leitner[i][0] >= 0 && result.leitner[i][0] < 9) { // if time to be learned and learned but not yet retired
                let questionOptions = words[i]["questions"];
                question.innerText = questionOptions[Math.floor(questionOptions.length * Math.random())]; // random question from options
                let rightChoice = Math.floor(4 * Math.random());
                let wrongAnswers = words.slice();
                wrongAnswers.splice(i, 1); // all other answers can't be duplicate of right answer
                for (let k = 0; k < 4; k++) {
                    if (k == rightChoice) {
                        choices[k].getElementsByClassName("questiontext")[0].innerText = words[i]["word"];
                        choices[k].addEventListener("click", () => {
                            chrome.runtime.sendMessage({ purpose: "updateLeitner", index: i, correct: true }) // send message to update 
                            popup(document.getElementById("right"));
                        });
                    } else {
                        choices[k].getElementsByClassName("questiontext")[0].innerText = wrongAnswers[Math.floor(wrongAnswers.length * Math.random())]["word"]; // random wrong answer for other choices
                        choices[k].addEventListener("click", () => {
                            chrome.runtime.sendMessage({ purpose: "updateLeitner", index: i, correct: false }) // send message to update 
                            popup(document.getElementById("wrong"));
                        });
                    }
                }
                return;
            }
        }
        // if not found any display popup in 1.1s so you can see if u got it wrong or right
        setTimeout(() => { notestpopup.style.display = ""; }, 1100);

    });

}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => { // when done updating from service worker, regen question
    if (request.purpose == "regenQuestion") {
        newQuestion();
    }
})

mainbuttons[2].addEventListener("click", newQuestion);
tomainexitbuttons[2].addEventListener("click", () => { // replacs the button with a new copy, getting rid of event listeners
    for (let c of choices) {
        c.replaceWith(c.cloneNode(true));
    }
})
// close popup
document.getElementById("okbutton").addEventListener("click", () => {
    notestpopup.style.display = "none";
    maintabs[2].style.display = "none";
});



// setting hover descriptions 
const s = document.getElementsByClassName("setting");
const descriptions = document.getElementsByClassName("desc");
for (let i = 0; i < s.length; i++) {
    console.log(i);
    s[i].addEventListener("mouseover", () => {
        descriptions[i].style.top = "90%";
    });
    s[i].addEventListener("mouseout", () => {
        descriptions[i].style.top = "100%";
    });
}

// read and apply settings
chrome.storage.local.get("testBool").then((result) => {
    document.getElementById("testbool").checked = result.testBool;
});
document.getElementById("testbool").addEventListener("click", () => {
    chrome.storage.local.set({ testBool: document.getElementById("testbool").checked });
});
chrome.storage.local.get("recommendBool").then((result) => {
    document.getElementById("recommendbool").checked = result.recommendBool;
});
document.getElementById("recommendbool").addEventListener("click", () => {
    chrome.storage.local.set({ recommendBool: document.getElementById("recommendbool").checked });
});
chrome.storage.local.get("testFreq").then((result) => {
    document.getElementById("testfreq").value = result.testFreq;
});
document.getElementById("testfreq").addEventListener("input", () => {
    chrome.storage.local.set({ testFreq: document.getElementById("testfreq").value });
});