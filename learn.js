// global words list
fetch("words.json").then((result) => { return result.json(); }).then((words) => {

// pregenerate all lessons
const lessons = [];

const lessontemplate = document.getElementsByClassName("lessontemplate")[0];
const definitiontemplate = document.getElementsByClassName("definitiontemplate")[0];
const imagetemplate = document.getElementsByClassName("imagetemplate")[0];
let activeLessonPage = 0;

// pregenerate lessons
let page = 0;
const wordgridcontainer = document.getElementById("wordgridcontainer");
// pregenerate lessons
for (const [key, value] of Object.entries(words)) {
    // generate lesson for each button
    let clone = lessontemplate.cloneNode(true);
    clone.getElementsByClassName("lessonword")[0].innerText = key; // lesson word on first page
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
    for (let i = 0; i < value["imgPages"].length; i++) {
        let imagePage = imagetemplate.cloneNode(true);
        imagePage.getElementsByClassName("lessonimage")[0].src = value["imgPages"][i][0]; // add image src
        imagePage.getElementsByClassName("imgdesc")[0].innerText = value["imgPages"][i][1];
        imagePage.style.display = ""; // template is invisible, display it
        addedPages.push(imagePage); // insert page
    }
    // AUDIO
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + key).then((result) => { return result.json() }).then((result) => {
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
    question.innerText = value["lessonquestion"];
    let rightChoice = Math.floor(Math.random() * 4); // random right answer
    let wrongAnswers = [0, 1, 2, 3];
    wrongAnswers.splice(rightChoice, 1);
    let buttons = clone.getElementsByClassName("question");
    let buttontexts = clone.getElementsByClassName("questiontext");
    let explanations = clone.getElementsByClassName("explanation");
    let answerfeedbacks = clone.getElementsByClassName("answerfeedback");
    explanations[0].innerText = value["explanations"][1]; // explain wrong answer
    explanations[1].innerText = value["explanations"][0]; // explain right answer
    for (let i = 0; i < 3; i++) {
        let button = buttons[wrongAnswers[i]];
        buttontexts[wrongAnswers[i]].innerText = value["answers"][i + 1]; // put text as one of the wrong answers
        button.addEventListener("click", () => {
            button.style["background-color"] = "pink"; // change background to red for wrong answer
            popup(answerfeedbacks[0]); // show wrong answer explanation
        });
    }
    let rightButton = buttons[rightChoice];
    buttontexts[rightChoice].innerText = value["answers"][0]; // put right answer
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
            if (result.leitner[key][0] == -1) { // add new word to leitner along with time added
                result.leitner[key] = [0, result.lessonTimer];
            }
            result.wordStates[key] = "learned";
            chrome.storage.local.set({ wordStates: result.wordStates });
            chrome.storage.local.set({ leitner: result.leitner });
            updateWordPage(); // changed unlearned to learned when finished
        });
        clone.style.display = "none";
    });
    lessons[key] = clone;
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

function updateWordPage() {
    chrome.storage.local.get("wordStates").then((result) => {
        // clear container
        wordgridcontainer.innerHTML = "";
        // generate grids of 16
        let count = 0;
        let currentwordgrid;
        for (const [key, value] of Object.entries(result.wordStates)) {
            if (!filter || value == state) { // passes filter
                if (count == 0) {
                    currentwordgrid = document.createElement("div");
                    currentwordgrid.classList = "wordgrid";
                    wordgridcontainer.appendChild(currentwordgrid);
                }
                count = (count + 1) % 16;
                let child = document.createElement("div"); // create wordcell button
                child.classList = "wordcell button";
                let b = document.createElement("b");
                console.log(key, value);
                b.innerText = key; // word for each cell
                let lessonstate = document.createElement("div");
                lessonstate.classList = "lessonstate"; // bubble in the corner
                // fill in learned or not learned in each cell
                if (value == "learned") {
                    lessonstate.style["background-color"] = "lightgreen";
                } else if (value == "unlearned") {
                    lessonstate.style["background-color"] = "pink";
                } else if (value == "recommended") {
                    lessonstate.style["background-color"] = "lightyellow"
                }
                child.appendChild(b);
                child.appendChild(lessonstate);
                currentwordgrid.appendChild(child) // put in current grid
                child.addEventListener("click", () => { // when clicked on corresponding lesson button
                    lessons[key].style.display = "block"; // show lesson

                    // reset lesson things such as going to first page, resetting test question colors
                    activeLessonPage = 0;
                    updatePages();
                    for (let j = 0; j < 4; j++) {
                        lessons[key].getElementsByClassName("question")[j].style["background-color"] = "var(--lightpurple)";
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

})
