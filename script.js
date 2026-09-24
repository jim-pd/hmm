const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const question = document.getElementById("question");
const result = document.getElementById("result");

let yesScale = 1;

/*
WHEN "NO" IS CLICKED
The YES button gets bigger.
*/

noButton.addEventListener("click", function () {

yesScale += 0.35;

yesButton.style.transform =
    `scale(${yesScale})`;


});

/*
WHEN "YES" IS CLICKED
Hide the first screen
and show the result.
*/

yesButton.addEventListener("click", function () {

question.style.display = "none";

result.style.display = "block";


});