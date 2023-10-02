/*global chrome*/

let mediaRecorder;
let recordedChunks = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'startRecording') {
    const tabId = message.tabId;
    startRecording(tabId);
  } else if (message.action === 'stopRecording') {
    stopRecording();
  }
});
