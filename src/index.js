import { Entry } from "./journal.js";
import "./css/styles.css";
import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"

function handleFormSubmission(event) {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let body = document.querySelector("#body").value;
  let wordCount = document.querySelector('#wordCount').value;
  let vowel = document.querySelector('#vowel').value;
  let consonant = document.querySelector('#consonant').value;
  let firstSentence = document.querySelector('#first-sentence').value;

  createEntry(title, body);
  wordCount = entrys.wordCount();
  vowel = entrys.vowelCount();
  consonant = entrys.consonantCount();
  firstSentence = entrys.getTeaser();
}

function createEntry(title, body) {
  let entrys = new Entry(title, body);
}

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.querySelector(".btn-info");
  submit.addEventListener("click", handleFormSubmission);
});
