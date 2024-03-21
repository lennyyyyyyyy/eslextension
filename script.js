// global words list
const words = ["hello", "dog", "cat", "lovely"];
const questions = {
    "hello": ["To greet my neighbor I told him ____"],
    "dog": ["I love it when Sam's ____ barks at me!"],
    "cat": ["Max's ___ purrs when they are happy"],
    "lovely": ["These flowers are fragrant, beautiful, and ___"]
};
const reviewTimes = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
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


const lessontemplate = document.getElementsByClassName("lessontemplate")[0];
const definitiontemplate = document.getElementsByClassName("definitiontemplate")[0];
let activeLessonPage = 0;

function updateWordPage() {
    wordgrid.innerHTML = '';
    for (let i = 16 * page; i < Math.min(16 * (page + 1), words.length); i++) { // for every word in group of 16
        let child = document.createElement("div");
        child.classList = "wordcell button";
        child.innerText = words[i];
        chrome.storage.local.get("learnedWords").then((result) => { // mark as learned or unlearned
            if (result.learnedWords[i]) {
                child.innerText += "\n\n learned";
            } else {
                child.innerText += "\n\n unlearned";
            }
        });
        wordgrid.appendChild(child); // make children and arrange as a grid
        child.addEventListener("click", () => {
            fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + words[i]).then((result) => result.json())
                .then((json) => { // fetch dictionary info
                    json = json[0]; // json stored in [0] element
                    let clone = lessontemplate.cloneNode(true);
                    clone.style.display = "initial"; // copy and display
                    clone.getElementsByClassName("lessonword")[0].innerText = words[i]; // lesson word on first page
                    let firstPage = clone.getElementsByClassName("lessonpage")[0];
                    for (let meaning of json["meanings"]) { // another page for every meaning
                        let def = definitiontemplate.cloneNode(true);
                        def.style.display = "";
                        def.getElementsByClassName("header")[0].innerText = meaning["partOfSpeech"];
                        let defbox = def.getElementsByClassName("definitions")[0];
                        for (let definition of meaning["definitions"]) {
                            defbox.innerText += definition["definition"] + "\nex: " + definition["example"] + "\n\n";
                        }
                        firstPage.after(def); // add each meaning page after the first
                    }
                    let pages = clone.getElementsByClassName("lessonpage"); // get all pages
                    let maxPage = json["meanings"].length + 1; // number of pages is number of meanings + 2
                    activeLessonPage = 0;
                    document.body.appendChild(clone);
                    clone.getElementsByClassName("exit button")[0].addEventListener("click", () => {
                        clone.remove();
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
                        chrome.storage.local.get(["learnedWords", "leitner", "lessonTimer"]).then((result) => {
                            if (!result.learnedWords[i]) { // add new word to leitner along with time added
                                result.leitner[0].push([words[i], result.lessonTimer]);
                            }
                            result.learnedWords[i] = true;
                            chrome.storage.local.set({ learnedWords: result.learnedWords });
                            chrome.storage.local.set({ leitner: result.leitner });
                        });
                        clone.remove();
                    })
                });
        });
    }
}
updateWordPage(0);
const wordscroll = document.getElementsByClassName("lesson scroll button");
wordscroll[0].addEventListener("click", () => {
    page = Math.max(0, page - 1);
    updateWordPage(page);
});
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
                    child.innerText = j[0];
                    vocablists[i].appendChild(child);
                }
                for (let j of result.leitner[2 * i + 1]) {
                    let child = document.createElement("div");
                    child.classList = "vocabword";
                    child.innerText = j[0];
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



const question = document.getElementById("question");
const choices = document.getElementsByClassName("question button");
function newQuestion() {
    chrome.storage.local.get(["leitner", "lessonTimer"]).then((result) => {
        for (let i = 0; i < 9; i++) { // loop through leitner
            for (let j in result.leitner[i]) {
                let word = result.leitner[i][j];
                if (word[1] <= result.lessonTimer) {

                    function questionRight() {
                        result.leitner[i].splice(j, 1);
                        result.leitner[i + 1].push([word[0], result.lessonTimer + reviewTimes[i + 1]]);
                        chrome.storage.local.set({ leitner: result.leitner });
                        newQuestion();
                    }
                    function questionWrong() {
                        result.leitner[i].splice(j, 1);
                        let n = Math.max(0, i - 1);
                        result.leitner[n].push(word[0], result.lessonTimer + reviewTimes[n]);
                        chrome.storage.local.set({ leitner: result.leitner });
                        newQuestion();
                    }
                    let questionOptions = questions[word[0]];
                    question.innerText = questionOptions[Math.floor(questionOptions.length * Math.random())];
                    let rightChoice = Math.floor(4 * Math.random());
                    let wrongAnswers = words.slice();
                    wrongAnswers.splice(wrongAnswers.indexOf(word[0]), 1);
                    for (let k = 0; k < 4; k++) {
                        if (k == rightChoice) {
                            choices[k].innerText = word[0];
                            choices[k].addEventListener("click", () => {
                                questionRight();
                            });
                        } else {
                            choices[k].innerText = wrongAnswers[Math.floor(wrongAnswers.length * Math.random())];
                            choices[k].addEventListener("click", () => {
                                questionWrong();
                            });
                        }
                    }
                    break;
                }
            }
        }
    });

}
mainbuttons[2].addEventListener("click", () => {
    newQuestion();
});