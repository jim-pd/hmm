const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const question = document.getElementById("question");
const result = document.getElementById("result");

let yesScale = 1;

const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbz1zREmzSbmRfcYNqyDA7DvU6uRxN_um1D_NsP3_GFiIMGNljA-aV4PQ74F4Dq0wJUQ/exec";


function sendAnswer(answer) {

    fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "answer=" + answer
    });

}


// NO
noButton.addEventListener("click", function () {

    sendAnswer("NO");

    yesScale += 0.35;

    yesButton.style.transform =
        `scale(${yesScale})`;

});


// YES
yesButton.addEventListener("click", function () {

    sendAnswer("YES");

    question.style.display = "none";

    result.style.display = "block";

});
