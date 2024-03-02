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

const words = ["lmao", "lmfao", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf", "dfsf"];
let page = 0;
const max_scroll = Math.floor((words.length - 1) / 16);
const wordgrid = document.getElementById("wordgrid");


function updateWordPage() {
    wordgrid.innerHTML = '';
    for (let i = 16 * page; i < Math.min(16 * (page + 1), words.length); i++) {
        let child = document.createElement("div");
        child.classList = "wordcell button";
        child.innerText = words[i];
        wordgrid.appendChild(child);
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