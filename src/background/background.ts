let audio: HTMLAudioElement = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const volume = Number(request.volume);
  if (audio) {
    audio.volume = volume;
  }

  if (audio) return;
  chrome.tabCapture.capture({audio: true}, (stream: MediaStream | null) => {
    if (stream) {
      audio = new Audio();
      audio.srcObject = stream;
      audio.play();
    }
  });

  sendResponse({volume: volume});
});
