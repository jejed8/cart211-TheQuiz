
"use strict";

// Select the quiz form
const quizForm = document.querySelector("#quiz-form");

// Retrieve previously saved answers
const savedAnswers = JSON.parse(
  sessionStorage.getItem("quizAnswers") || "{}"
);

// Restore the answer if the user returns to this page
if (savedAnswers.q1) {
  const previousChoice = quizForm.querySelector(
    `input[name="q1"][value="${savedAnswers.q1}"]`
  );

  if (previousChoice) {
    previousChoice.checked = true;
  }
}

// When the user presses "Next Question"
quizForm.addEventListener("submit", function (event) {

  // Prevent the form from reloading the page
  event.preventDefault();

  // Get the selected answer
  const selectedAnswer = quizForm.querySelector(
    'input[name="q1"]:checked'
  );

  // Make sure an answer was selected
  if (!selectedAnswer) {
    return;
  }

  // Save the selected value
  savedAnswers.q1 = selectedAnswer.value;

  // Store the updated answers
  sessionStorage.setItem(
    "quizAnswers",
    JSON.stringify(savedAnswers)
  );

  // Move to the next question
  window.location.href = "question-2.html";

});
