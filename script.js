// Create a quiz
// Event Listenerd
let answerE1 = document.getElementById("answer");
let answer2E1 = document.getElementById("answer2");
let answer3E1 = document.getElementById("answer3");
let answer4E1 = document.getElementById("answer4");
let markquizE1 = document.getElementById("markquiz");
let totalE1 = document.getElementById("total");

// Button Event Listener
document.getElementById("markquiz").addEventListener("click", markquiz);
document.getElementById("total").addEventListener("click", total);

function markquiz() {
  // generate a random number
  let randNum = Math.random() * 3;
  if (randNum < 0.5) {
    let answer = "Georgetown";
    answerE1.innerHTML = answer;
  } else if (randNum < 1) {
    let answer2 = "Essequibo River";
    answer2E1.innerHTML = answer2;
  } else if (randNum < 1.5) {
    let answer3 = "Cricket";
    answer3E1.innerHTML = answer3;
  } else {
    let answer4 = "Dutch|| British";
    answer4E1.innerHTML = answer4;
  }
}
function total() {
  let total = "3/4 (75%)";
  totalE1.innerHTML = total;
  console.log("good job!");
}
