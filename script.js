const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const question = document.getElementById("question");
const result = document.getElementById("result");

let yesScale = 1;


noButton.addEventListener("click", function () {

yesScale += 0.35;

yesButton.style.transform =
    `scale(${yesScale})`;


});


yesButton.addEventListener("click", function () {

question.style.display = "none";

result.style.display = "block";


});
