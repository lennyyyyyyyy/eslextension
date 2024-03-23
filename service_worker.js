function incrementLessonTimer() {
    chrome.storage.local.get("lessonTimer").then((result) => {
        result.lessonTimer++;
        chrome.storage.local.set({ lessonTimer: result.lessonTimer });
    });
}
setInterval(incrementLessonTimer, 10 * 60 * 1000);