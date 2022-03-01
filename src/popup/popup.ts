import "./assets/popup.scss";

const label: HTMLParagraphElement = document.querySelector("#value-label");
const input: HTMLInputElement = document.querySelector("#value-input");

input.addEventListener("input", () => {
  label.innerHTML = input.value;
  chrome.runtime.sendMessage({volume: input.value}, (response) => {
    console.log('popup', response);
  });
});
