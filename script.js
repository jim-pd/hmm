const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const question = document.getElementById("question");
const result = document.getElementById("result");

let yesScale = 1;


// Google Sheet URL
const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbz1zREmzSbmRfcYNqyDA7DvU6uRxN_um1D_NsP3_GFiIMGNljA-aV4PQ74F4Dq0wJUQ/exec";


// Send answer to Google Sheet
function sendAnswer(answer) {

    fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "answer=" + encodeURIComponent(answer)
    });

}


// NO BUTTON
noButton.addEventListener("click", function () {

    // Send NO to Google Sheet
    sendAnswer("NO");

    // Make YES button bigger
    yesScale += 0.35;

    yesButton.style.transform =
        `scale(${yesScale})`;

});


// YES BUTTON
yesButton.addEventListener("click", function () {

    // Send YES to Google Sheet
    sendAnswer("YES");

    // Hide question
    question.style.display = "none";

    // Show result
    result.style.display = "block";

});
