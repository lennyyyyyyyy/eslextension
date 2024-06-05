fetch("words.json").then((result) => { return result.json(); }).then((words) => {
    // set default values for local storage
    function setDefault(name, def) {
        chrome.storage.local.get(name).then((result) => {
            let obj = {};
            obj[name] = def;
            chrome.storage.local.set(obj);
        });
    }

    function resetDefaults() {
        const wordstate = {};
        const defaultLeitner = {};
        for (const [key, value] of Object.entries(words)) {
            wordstate[key] = "unlearned";
            defaultLeitner[key] = [-1, -1];
        }


        setDefault("wordStates", wordstate);
        setDefault("leitner", defaultLeitner);
        setDefault("lessonTimer", 0);
        setDefault("testBool", false);
        setDefault("recommendBool", false);
        setDefault("testFreq", 10);
        setDefault("lastTime", new Date().getTime());
    }

    resetDefaults();

    const reviewTimes = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
    function questionRight(word) {
        chrome.storage.local.get(["leitner", "lessonTimer"]).then((result) => {
            result.leitner[word][0]++; // move up one level
            result.leitner[word][1] = result.lessonTimer + reviewTimes[result.leitner[word][0]];
            chrome.storage.local.set({ leitner: result.leitner });
            chrome.runtime.sendMessage({ purpose: "regenQuestion" }); // send request when done to regenerate question
        })
    }
    function questionWrong(word) {
        chrome.storage.local.get(["leitner", "lessonTimer"]).then((result) => {
            result.leitner[word][0] = Math.max(0, result.leitner[word][0] - 1); // prevents from going below 0
            result.leitner[word][1] = result.lessonTimer + reviewTimes[result.leitner[word][0]];
            chrome.storage.local.set({ leitner: result.leitner });
            chrome.runtime.sendMessage({ purpose: "regenQuestion" }); // send request when done to regenerate question
        })
    }
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.purpose == "updateLeitner") {
            if (request.correct) {
                questionRight(request.word);
            } else {
                questionWrong(request.word);
            }
        } else if (request.purpose == "updateLessonTimer") {
            chrome.storage.local.get(["lessonTimer", "lastTime"]).then((result) => {
                var newDate = new Date();
                var newTime = newDate.getTime()
                result.lessonTimer += (newTime - result.lastTime) / (5 * 60 * 1000); // increments by one every 5 mins
                console.log(result.lessonTimer);
                chrome.storage.local.set({ lessonTimer: result.lessonTimer, lastTime: newTime });
            });
        } else if (request.purpose == "resetDefaults") {
            resetDefaults();
        }
    })

    // pronounciation context menu
    chrome.runtime.onInstalled.addListener(() => {
        chrome.contextMenus.create({
            title: "Find Pronounciation",
            contexts: ["selection"],
            id: "audio"
        })
        resetDefaults();
    })

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + info.selectionText.toLocaleLowerCase()).then((result) => { return result.json(); }).then((json) => {
            for (let p of json[0]["phonetics"]) {
                if (p["audio"] != undefined && p["audio"] != "") {
                    chrome.tabs.sendMessage(tab.id, { purpose: "playAudio", src: p["audio"] });
                    break;
                }
            }
        })
    })

});


