const displayBox = document.querySelector(".display"),
    displayInput = document.querySelector(".display-input"),
    displayResult = document.querySelector(".display-result"),
    buttons = document.querySelectorAll("button"),
    operators = ["%", "÷", "×", "-", "+"];
let input = "",
    result = "";

// main function to handle calculator logic
const calculate = btnValue => {

    // handle equals
    if (btnValue === "=") {
        const formattedInput = replaceOperators(input);

        try {
            const calculatedValue = eval(formattedInput);
            result = parseFloat(calculatedValue.toFixed(10));
        } catch {
            result = "Error";
        }

        displayBox.classList.add("active");
    };

    // handle AC (All Clear)
    if (btnValue === "AC") {
        resetCalculator("");
    }
    else {
        input += btnValue;
    }


    // update display
    displayInput.value = input;
    displayResult.value = result;
    displayInput.scrollLeft = displayInput.scrollWidth
};

// function to replace division (÷) and multiplication (×) symbols to javascript compatible operators ("/" and "*")
const replaceOperators = input => input.replaceAll("÷", "/").replaceAll("×", "*");

// function to reset calculator state with a new input value
const resetCalculator = newInput => {
    input = newInput;
    result = "";
    displayBox.classList.remove("active");
};

// Adding click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener("click", e => calculate(e.target.textContent))
});