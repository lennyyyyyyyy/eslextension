const mainbuttons = document.getElementsByClassName("main button");
const maintabs = document.getElementsByClassName("main tab");
const tomainexitbuttons = document.getElementsByClassName("tomain exit button");
for (let i = 0; i < 3; i++) {
    mainbuttons[i].addEventListener("click", () => {
        maintabs[i].style.display = "block";
    });
    tomainexitbuttons[i].addEventListener("click", () => {
        maintabs[i].style.display = "none";
    });
}

const words = ["hello", "dog", "cat", "lovely"];
let page = 0;
const max_scroll = Math.floor((words.length - 1) / 16);
const wordgrid = document.getElementById("wordgrid");


const lessontemplate = document.getElementsByClassName("lessontemplate")[0];
const definitiontemplate = document.getElementsByClassName("definitiontemplate")[0];
let activeLessonPage = 0;

function updateWordPage() {
    wordgrid.innerHTML = '';
    for (let i = 16 * page; i < Math.min(16 * (page + 1), words.length); i++) {
        let child = document.createElement("div");
        child.classList = "wordcell button";
        child.innerText = words[i];
        wordgrid.appendChild(child);
        child.addEventListener("click", () => {
            fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + words[i]).then((result) => result.json())
                .then((json) => {
                    json = json[0];
                    let clone = lessontemplate.cloneNode(true);
                    clone.style.display = "initial";
                    clone.getElementsByClassName("lessonword")[0].innerText = words[i];
                    for (let meaning of json["meanings"]) {
                        let def = definitiontemplate.cloneNode(true);
                        def.style.display = "";
                        def.getElementsByClassName("header")[0].innerText = meaning["partOfSpeech"];
                        let defbox = def.getElementsByClassName("definitions")[0];
                        for (let definition of meaning["definitions"]) {
                            defbox.innerText += definition["definition"] + "\nex: " + definition["example"] + "\n\n";
                        }
                        clone.appendChild(def);
                    }
                    let pages = clone.getElementsByClassName("lessonpage");
                    let maxPage = json["meanings"].length;
                    activeLessonPage = 0;
                    document.body.appendChild(clone);
                    clone.getElementsByClassName("exit button")[0].addEventListener("click", () => {
                        clone.remove();
                    });
                    function updatePages() {
                        for (let i = 0; i <= maxPage; i++) {
                            console.log(i);
                            console.log(pages[i]);
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

const vocab = [["hello"], ["kevin", "is"], ["a", "short"], ["dumb", "boy"]];
let vocabpage = 0;
const vocabscroll = document.getElementsByClassName("vocab scroll button");
const vocabgroups = document.getElementsByClassName("vocabgroup");
const vocablists = document.getElementsByClassName("vocablist");

function updateVocabPage() {
    for (let i = 0; i < 4; i++) {
        if (i == vocabpage) {
            vocablists[i].innerHTML = '';
            for (let j of vocab[i]) {
                let child = document.createElement("div");
                child.classList = "vocabword";
                child.innerText = j;
                vocablists[i].appendChild(child);
            }
            vocabgroups[i].style.display = "inline-block";
        } else {
            vocabgroups[i].style.display = "none";
        }
    }
}
updateVocabPage(0);
vocabscroll[0].addEventListener("click", () => {
    vocabpage = Math.max(0, vocabpage - 1);
    updateVocabPage();
});
vocabscroll[1].addEventListener("click", () => {
    vocabpage = Math.min(3, vocabpage + 1);
    updateVocabPage();
});