const wordsLength = 17;
// set default values for local storage
function setDefault(name, def) {
    chrome.storage.local.get(name).then((result) => {
        if (result[name] == undefined || result[name] == null) {
            let obj = {};
            obj[name] = def;
            chrome.storage.local.set(obj);
        }
    });
}
const wordstate = [];
for (let i = 0; i < wordsLength; i++) {
    wordstate.push("unlearned");
}
setDefault("wordStates", wordstate);
const defLeitner = [];
for (let i = 0; i < wordsLength; i++) {
    defLeitner.push([-1, -1]);
}
setDefault("leitner", defLeitner);
setDefault("lessonTimer", 0);
setDefault("testBool", false);
setDefault("recommendBool", false);
setDefault("testFreq", 10);
let nowDate = new Date()
setDefault("lastTime", nowDate.getTime());



const reviewTimes = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
function questionRight(wordIndex) {
    chrome.storage.local.get(["leitner", "lessonTimer"]).then((result) => {
        console.log("correct question")
        result.leitner[wordIndex][0]++; // move up one level
        result.leitner[wordIndex][1] = result.lessonTimer + reviewTimes[result.leitner[wordIndex][0]];
        chrome.storage.local.set({ leitner: result.leitner });
        chrome.runtime.sendMessage({ purpose: "regenQuestion" }); // send request when done to regenerate question
    })
}
function questionWrong(wordIndex) {
    chrome.storage.local.get(["leitner", "lessonTimer"]).then((result) => {
        result.leitner[wordIndex][0] = Math.max(0, result.leitner[wordIndex][0] - 1); // prevents from going below 0
        result.leitner[wordIndex][1] = result.lessonTimer + reviewTimes[result.leitner[wordIndex][0]];
        chrome.storage.local.set({ leitner: result.leitner });
        chrome.runtime.sendMessage({ purpose: "regenQuestion" }); // send request when done to regenerate question
    })
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.purpose == "updateLeitner") {
        if (request.correct) {
            questionRight(request.index);
        } else {
            questionWrong(request.index);
        }
    }
})

// pronounciation context menu
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Find Pronounciation",
        contexts: ["selection"],
        id: "audio"
    })
    chrome.contextMenus.onClicked.addListener((info, tab) => {
        console.log("https://api.dictionaryapi.dev/api/v2/entries/en/" + info.selectionText.toLocaleLowerCase());
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + info.selectionText.toLocaleLowerCase()).then((result) => { return result.json(); }).then((json) => {
            for (let p of json[0]["phonetics"]) {
                if (p["audio"] != undefined && p["audio"] != "") {
                    chrome.tabs.sendMessage(tab.id, { purpose: "playAudio", src: p["audio"] });
                    break;
                }
            }
        })
    })
})

