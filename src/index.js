import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import Entry from './journal';

function handleJournalForm() {
  event.preventDefault();
  document.querySelector("#response").innerText = null;
  const newText = document.querySelector("#entry").value;
  const newEntry = new Entry(newText);
  const wordCount = newEntry.wordCount();
  const vowelCount = newEntry.vowelCount();
  const consonantCount = newEntry.vowelCount();
  const newTeaser = newEntry.getTeaser();
  const outputArray = [wordCount, vowelCount, consonantCount, newTeaser];
  outputArray.forEach(element => {
    const pTag = document.createElement("p");
    pTag.append(element);
    document.querySelector("#response").append(pTag);
  });
}

document.querySelector("#journal-form").addEventListener("submit", handleJournalForm);