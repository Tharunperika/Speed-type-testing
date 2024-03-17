let speedTypingTestEl = document.getElementById("speedTypingTest");


let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput")
let resultEl = document.getElementById("result");


let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");


let spinnerEl = document.getElementById("spinner");


let counter = 0;
let timerId = null;


timerId = setInterval(function() {
    counter = counter + 1;
    timerEl.textContent = counter


}, 1000);


function reset() {
    spinnerEl.classList.remove("d-none")
    counter = 0;
    quoteInputEl.value = "";
    timerEl.textContent = counter //counter;
    resultEl.textContent = "";


    let url = "https://apis.ccbp.in/random-quote"
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none")
            console.log(jsonData)
            quoteDisplayEl.textContent = jsonData.content;
        });


}
reset(); // Call the function so that it sets the random text when page reloads.
resetBtnEl.addEventListener("click", reset); // Correction.
submitBtnEl.onclick = function() {
    let userInputValue = quoteInputEl.value;
    if (userInputValue === quoteDisplayEl.textContent) {
        clearInterval(timerId);
        resultEl.textContent = "You typed in " + timerEl.textContent + " seconds."
    } else {
        resultEl.textContent = "You typed incorrect sentence."
    }
}