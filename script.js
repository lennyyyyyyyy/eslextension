// global words list
const words = [{
    "word": "hello",
    "questions": ["To greet my neighbor I told him ____"],
    "src": "https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    "word": "dog",
    "questions": ["I love it when Sam's ____ barks at me!"],
    "src": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    "word": "cat",
    "questions": ["Max's ___ purrs when they are happy"],
    "src": "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    "word": "talk",
    "questions": ["I'm interested. Please ___."],
    "src": "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}];
const reviewTimes = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
// pregenerate all lessons
const lessons = [];

const lessontemplate = document.getElementsByClassName("lessontemplate")[0];
const definitiontemplate = document.getElementsByClassName("definitiontemplate")[0];
const imagetemplate = document.getElementsByClassName("imagetemplate")[0];
let activeLessonPage = 0;

for (let index = 0; index < words.length; index++) {
    let wordData = words[index];
    let clone = lessontemplate.cloneNode(true);
    clone.getElementsByClassName("lessonword")[0].innerText = wordData["word"]; // lesson word on first page
    let firstPage = clone.getElementsByClassName("lessonpage")[0];
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
    let imagePage = imagetemplate.cloneNode(true);
    imagePage.getElementsByClassName("lessonimage")[0].src = wordData["src"]; // add image src
    imagePage.style.display = ""; // template is invisible, display it
    firstPage.after(imagePage); // insert page
    // AUDIO
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordData["word"]).then((result) => { return result.json() }).then((result) => {
        clone.getElementsByClassName("lessonaudio")[0].src = result[0]["phonetics"][0]["audio"];
        console.log(clone.getElementsByClassName("lessonaudio"));
        console.log(result[0]["phonetics"][0]["audio"]);

    });
    let pages = clone.getElementsByClassName("lessonpage"); // get all pages
    let maxPage = pages.length - 1; // number of pages is number of meanings + 2
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
        console.log(index);
        chrome.storage.local.get(["learnedWords", "leitner", "lessonTimer"]).then((result) => {
            if (!result.learnedWords[index]) { // add new word to leitner along with time added
                result.leitner[0].push([index, result.lessonTimer]);
            }
            result.learnedWords[index] = true;
            chrome.storage.local.set({ learnedWords: result.learnedWords });
            chrome.storage.local.set({ leitner: result.leitner });
        });
        clone.style.display = "none";
    });
    lessons.push(clone);
}


// set default values for local storage
function setDefault(name, def) {
    chrome.storage.local.get(name).then((result) => {
        if (result[name] == undefined) {
            let obj = {};
            obj[name] = def;
            chrome.storage.local.set(obj);
        }
    });
}
const learned = [];
for (let i in words) {
    learned.push(false);
}
setDefault("learnedWords", learned);
setDefault("leitner", [[], [], [], [], [], [], [], [], [], []]);
setDefault("lessonTimer", 0);



function resetDefaults() {
    chrome.storage.local.set({ learnedWords: learned });
    chrome.storage.local.set({ leitner: [[], [], [], [], [], [], [], [], [], []] });
    chrome.storage.local.set({ lessonTimer: 0 });
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




let page = 0;
const max_scroll = Math.floor((words.length - 1) / 16);
const wordgrid = document.getElementById("wordgrid");




function updateWordPage() {
    wordgrid.innerHTML = '';
    for (let i = 16 * page; i < Math.min(16 * (page + 1), words.length); i++) { // for every word in group of 16
        let child = document.createElement("div");
        child.classList = "wordcell button";
        child.innerText = words[i]["word"];
        chrome.storage.local.get("learnedWords").then((result) => { // mark as learned or unlearned
            if (result.learnedWords[i]) {
                child.innerText += "\n\n learned";
            } else {
                child.innerText += "\n\n unlearned";
            }
        });
        wordgrid.appendChild(child); // make children and arrange as a grid
        child.addEventListener("click", () => {
            lessons[i].style.display = "block";
            activeLessonPage = 0;
        });
    }
}
updateWordPage(0);
const wordscroll = document.getElementsByClassName("lesson scroll button");
// scroll left 
wordscroll[0].addEventListener("click", () => {
    page = Math.max(0, page - 1);
    updateWordPage(page);
});
// scroll right
wordscroll[1].addEventListener("click", () => {
    page = Math.min(max_scroll, page + 1);
    updateWordPage(page);
});






let vocabpage = 0;
const vocabscroll = document.getElementsByClassName("vocab scroll button");
const vocabgroups = document.getElementsByClassName("vocabgroup");
const vocablists = document.getElementsByClassName("vocablist");

function updateVocabPage() {
    for (let i = 0; i < 5; i++) {
        if (i == vocabpage) {
            vocablists[i].innerHTML = '';
            chrome.storage.local.get("leitner").then((result) => {
                for (let j of result.leitner[2 * i]) {
                    let child = document.createElement("div");
                    child.classList = "vocabword";
                    child.innerText = words[j[0]]["word"];
                    vocablists[i].appendChild(child);
                }
                for (let j of result.leitner[2 * i + 1]) {
                    let child = document.createElement("div");
                    child.classList = "vocabword";
                    child.innerText = words[j[0]]["word"];
                    vocablists[i].appendChild(child);
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
const choices = document.getElementsByClassName("question button");

const notestpopup = document.getElementById("notestpopup");
function newQuestion() {
    chrome.storage.local.get(["leitner", "lessonTimer"]).then((result) => {
        for (let i = 0; i < 9; i++) { // loop through leitner
            for (let j = 0; j < result.leitner[i].length; j++) {
                let word = result.leitner[i][j]; // contains word index and learnable time
                if (word[1] <= result.lessonTimer) { // if time is ahead of when it can be reviewed 
                    function questionRight() {
                        result.leitner[i].splice(j, 1);
                        result.leitner[i + 1].push([word[0], result.lessonTimer + reviewTimes[i + 1]]); // move up one level
                        chrome.storage.local.set({ leitner: result.leitner });
                        newQuestion(); // finished this question, move to next one
                    }
                    function questionWrong() {
                        result.leitner[i].splice(j, 1);
                        let n = Math.max(0, i - 1);
                        result.leitner[n].push(word[0], result.lessonTimer + reviewTimes[n]); // move down one level
                        chrome.storage.local.set({ leitner: result.leitner });
                        newQuestion(); // finished this question, move to next one
                    }
                    let questionOptions = words[word[0]]["questions"];
                    question.innerText = questionOptions[Math.floor(questionOptions.length * Math.random())]; // random question from options
                    let rightChoice = Math.floor(4 * Math.random());
                    let wrongAnswers = words.slice();
                    wrongAnswers.splice(word[0], 1); // all other answers can't be duplicate of right answer
                    for (let k = 0; k < 4; k++) {
                        if (k == rightChoice) {
                            choices[k].innerText = words[word[0]]["word"];
                            choices[k].addEventListener("click", () => {
                                questionRight();
                            });
                        } else {
                            choices[k].innerText = wrongAnswers[Math.floor(wrongAnswers.length * Math.random())]["word"]; // random wrong answer for other choices
                            choices[k].addEventListener("click", () => {
                                questionWrong();
                            });
                        }
                    }
                    return; // one question at a time
                }
            }
        }
        // if not found any display popup
        notestpopup.style.display = "";
    });

}
// close popup
document.getElementById("okbutton").addEventListener("click", () => {
    notestpopup.style.display = "none";
    maintabs[2].style.display = "none";
});
mainbuttons[2].addEventListener("click", () => {
    newQuestion();
});