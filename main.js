// global vars
const mainbuttons = document.getElementsByClassName("main button");
const maintabs = document.getElementsByClassName("main tab");
const tomainexitbuttons = document.getElementsByClassName("tomain exit button");
// global funcs
function popup(element) { // popups for right and wrong answer for 1 sec
    element.style.top = "89%";
    setTimeout(() => { element.style.top = "100%" }, 1000);
}

setInterval(() => { chrome.runtime.sendMessage({ purpose: "updateLessonTimer" }) }, 60000) // updates lesson timer every min;

// directs 4 main buttons to screen and exit buttons back out

for (let i = 0; i < 4; i++) {
    mainbuttons[i].addEventListener("click", () => {
        maintabs[i].style.display = "block";
    });
    tomainexitbuttons[i].addEventListener("click", () => {
        maintabs[i].style.display = "none";
    });
}