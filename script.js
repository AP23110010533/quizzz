var questions = [
{
question: "Which planet in our solar system is the largest?",
choices: {
a: "Jupiter",
b: "Saturn",
c: "Uranus"
},
answer: "a"
},
{
question: "What year was the first moon landing?",
choices: {
a: "1975",
b: "1972",
c: "1969"
},
answer: "c"
},
{
question: "How many continents are there?",
choices: {
a: "6",
b: "7",
c: "8"
},
answer: "b"
},
{
question: "Which is the fastest land animal?",
choices: {
a: "Pronghorn",
b: "Cheeta",
c: "Springbokgit"
},
answer: "b"
},
{
question: "Which state is the most populated?",
choices: {
a: "California",
b: "New York",
c: "Texas"
},
answer: "a"
}
];
function quiz(){
var output = [];
questions.forEach((currentQuestion, questionNumber) => {
var choices = [];
for(letter in currentQuestion.choices) {
choices.push(
`<label><input type="radio" name="question${questionNumber}" value="${letter}">
<span class="customRadio"></span>
${letter} :
${currentQuestion.choices[letter]}
</label>`
);
}
output.push(
`<div class="slide">
<div class="question">${currentQuestion.question}</div>
<div class="choices">${choices.join("")}</div>
</div>`);
});
quizContainer.innerHTML = output.join("");
}
function results(){
var answerContainers = quizContainer.querySelectorAll(".choices");
var numCorrect = 0;
questions.forEach((currentQuestion, questionNumber) => { 
var answerContainer = answerContainers[questionNumber];
var selector = `input[name=question${questionNumber}]:checked`;
var userAnswer = (answerContainer.querySelector(selector) || {}).value;
if(userAnswer === currentQuestion.answer) {
numCorrect++;

answerContainers[questionNumber].style.color = "rgb(0, 88, 4)";
} else {   
answerContainers[questionNumber].style.color = "rgb(141, 0, 0)";
}
});
resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}
function showSlide(n) {
slides[currentSlide].classList.remove("active-slide");
slides[n].classList.add("active-slide");
currentSlide = n;
if(currentSlide === 0) {
previousButton.style.display = "none";
} else {
previousButton.style.display = "inline-block";
}
if(currentSlide === slides.length - 1) {
nextButton.style.display = "none";
submitButton.style.display = "inline-block";
} else {
nextButton.style.display = "inline-block";
submitButton.style.display = "none";
}
}
function nextSlide() {
showSlide(currentSlide + 1);
progressPercent += 25;
progressBar.style.width = progressPercent +  "%";
}
function previousSlide() {
showSlide(currentSlide - 1);
progressPercent -= 25;
progressBar.style.width = progressPercent + "%";
}
var progressBar = document.getElementById("progress-bar");
var progressPercent = 0;
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
quiz();
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(0);
submitButton.addEventListener("click", results);
previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);
