import { myQuestions } from "./questions.js";

// Tags selected
const quizQuestion = document.querySelector("#quizQuestion");
const alternative_a = document.querySelector("#alt_a");
const alternative_b = document.querySelector("#alt_b");
const alternative_c = document.querySelector("#alt_c");
const alternative_d = document.querySelector("#alt_d");
const showResultDiv = document.querySelector("#showResultDiv");
const submitBtn = document.querySelector("#submitBtn");
const showFinalScoreDiv = document.querySelector("#showFinalScore");
const nextQuestionBtn = document.querySelector("#nextQuestionBtn");
let allAlternatives = document.querySelectorAll(".alternatives");

// Counter
let counter = 0;

// Functions
function showResult() {
   showResultDiv.style.display = "block";

   showResultDiv.style.fontSize = "2rem";
   showResultDiv.style.paddingTop = "2rem";

   showResultDiv.style.fontWeight = "bold";
}

function elementClicked() {
   for (let i of allAlternatives) {
      i.addEventListener("click", function () {
         console.log(this.id);

         return this.id;
      });
   }
};

console.log(elementClicked());


// THIS VARIABLE ABOVE (ELEMENTCLICKEC) is a function that HEARS THE CLICK FROM ALTERNATIVE.
// I NEED TO IMPLEMENT IT TO THE FUNCTION BELOW IN ORDER TO GET THE CLICH AND COMPARE IF THIS IS THE SAME myQuestions[0]["correctAnswer"] (LINE 51)


function showFinalScore(elementClicked) {
   const yourScoreIs = `Your score is ${counter}`;



      
   if (myQuestions[0]["correctAnswer"]) {
      //add if this is === element clicked
      counter += 10;
      showResultDiv.innerText = "Correct";
      showResultDiv.style.color = "rgb(104, 242, 40)";
   } else {
      showResultDiv.innerText = "Wrong";
      showResultDiv.style.color = "red";
   }

   showFinalScoreDiv.style.display = "block";

   showFinalScoreDiv.innerHTML = yourScoreIs;
}

function showNextQuestionButton() {
   nextQuestionBtn.style.display = "block";
}

quizQuestion.innerText = myQuestions[0]["Question 01/05"];

alternative_a.innerText = myQuestions[0]["Answers:"]["a"];

alternative_b.innerText = myQuestions[0]["Answers:"]["b"];

alternative_c.innerText = myQuestions[0]["Answers:"]["c"];

alternative_d.innerText = myQuestions[0]["Answers:"]["d"];

function hideResultAndFinalScoreDivs(event) {
   if ((event.target.style.display = "block")) {
      event.target.style.display = "none";
   }

   if ((showFinalScoreDiv.style.display = "block")) {
      showFinalScoreDiv.style.display = "none";
   }

   if ((showResultDiv.style.display = "block")) {
      showResultDiv.style.display = "none";
   }

   submitBtn.disabled = false;
}

function disableSubmitButton() {
   submitBtn.disabled = true;
}

// Event Listeners

submitBtn.addEventListener("click", showResult);

submitBtn.addEventListener("click", showFinalScore);

submitBtn.addEventListener("click", showNextQuestionButton);

nextQuestionBtn.addEventListener("click", hideResultAndFinalScoreDivs);

submitBtn.addEventListener("click", disableSubmitButton);
