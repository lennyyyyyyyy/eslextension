// setting hover descriptions 
const s = document.getElementsByClassName("setting");
const descriptions = document.getElementsByClassName("desc");
for (let i = 0; i < s.length; i++) {
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


// full reset button
$("#reset").click(() => {
    chrome.runtime.sendMessage({ purpose: "resetDefaults" });
})