// global words list
fetch("words.json").then((result) => { return result.json(); }).then((words) => {

// clicking on "practice" tab
const question = document.getElementById("question");
const choices = maintabs[2].getElementsByClassName("question button");

const notestpopup = document.getElementById("notestpopup");
function newQuestion() {
    chrome.storage.local.get(["leitner", "lessonTimer", "wordStates"]).then((result) => {
       for (const [key, value] of Object.entries(result.leitner)) {
            // learnedamount has to be at least 4 to have enough answer choices
            var learnedset = new Set();
            for (const [key, value] of Object.entries(result.wordStates)) {
                console.log(key);
                if (value == "learned") {
                    learnedset.add(key);
                }
            }


            if (value[1] <= result.lessonTimer && value[0] >= 0 && value[0] < 9 && learnedset.size >= 4) { // if time to be learned and learned but not yet retired
                let questionOptions = words[key]["questions"];
                question.innerText = questionOptions[Math.floor(questionOptions.length * Math.random())]; // random question from options
                let rightChoice = Math.floor(4 * Math.random());
                let wrongAnswers = new Set(learnedset);
                wrongAnswers.delete(key); // all other answers can't be duplicate of right answer
                for (let k = 0; k < 4; k++) {
                    if (k == rightChoice) {
                        choices[k].getElementsByClassName("questiontext")[0].innerText = key;
                        choices[k].addEventListener("click", () => {
                            chrome.runtime.sendMessage({ purpose: "updateLeitner", word: key, correct: true }) // send message to update 
                            popup(document.getElementById("right"));
                        });
                    } else {
                        let wronganswer = [...wrongAnswers][Math.floor(wrongAnswers.length * Math.random())]; // random wrong answer for other choices
                        choices[k].getElementsByClassName("questiontext")[0].innerText = wronganswer; 
                        wrongAnswers.delete(wronganswer); // remove from list of wrong answers
                        choices[k].addEventListener("click", () => {
                            chrome.runtime.sendMessage({ purpose: "updateLeitner", word: key, correct: false }) // send message to update 
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




})
