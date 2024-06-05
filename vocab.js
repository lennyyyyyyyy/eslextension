let vocabpage = 0;
const vocabscroll = document.getElementsByClassName("vocab scroll button");
const vocabgroups = document.getElementsByClassName("vocabgroup");
const vocablists = document.getElementsByClassName("vocablist");

function updateVocabPage() {
    for (let i = 0; i < 5; i++) {
        if (i == vocabpage) {
            vocablists[i].innerHTML = '';
            chrome.storage.local.get("leitner").then((result) => {
                for (const [key, value] of Object.entries(result.leitner)) {
                    if (result.leitner[key][0] == 2 * i || result.leitner[key][0] == 2 * i + 1) {
                        let child = document.createElement("div");
                        child.classList = "vocabword";
                        child.innerText = key;
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