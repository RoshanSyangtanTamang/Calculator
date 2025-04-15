const displayBox = document.querySelector(".display"),
    displayInput = document.querySelector(".display-input"),
    displayResult = document.querySelector(".display-result"),
    buttons = document.querySelectorAll("button"),
    operators = ["%", "÷", "×", "-", "+"];
let input = "",
    result = "";

// main function to handle calculator logic
const calculate = btnValue => {

    input += btnValue;

    // update display
    displayInput.value = input;
    displayResult.value = result;
    displayInput.scrollLeft = displayInput.scrollWidth
};

// Adding click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener("click", e => calculate(e.target.textContent))
});