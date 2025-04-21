const displayBox = document.querySelector(".display"),
    displayInput = document.querySelector(".display-input"),
    displayResult = document.querySelector(".display-result"),
    buttons = document.querySelectorAll("button"),
    operators = ["%", "÷", "×", "-", "+"];
let input = "",
    result = "",
    lastCalculation = false;

// main function to handle calculator logic
const calculate = btnValue => {
    const lastChar = input.slice(-1),
        secondToLastChar = input.slice(-2, -1),
        withoutLastChar = input.slice(0, -1),
        isLastCharOperator = operators.includes(lastChar);

    // handle equals
    if (btnValue === "=") {
        if (
            input === "" ||
            lastChar === "." ||
            lastChar === "(" ||
            isLastCharOperator && lastChar !== "%" ||
            lastCalculation
        ) return;
        const formattedInput = replaceOperators(input);

        try {
            const calculatedValue = eval(formattedInput);
            result = parseFloat(calculatedValue.toFixed(10));
        } catch {
            result = "Error";
        }

        // input += btnValue;
        lastCalculation = true;
        displayBox.classList.add("active");
    }

    // handle AC (All Clear)
    else if (btnValue === "AC") {
        resetCalculator("");
    }

    // Handle backspace
    else if (btnValue === "") {
        input = withoutLastChar;
    }

    // Handle numbers
    else {
        if (lastCalculation) resetCalculator(btnValue);
        else input += btnValue;
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
    lastCalculation = false;
    displayBox.classList.remove("active");
};

// Adding click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener("click", e => calculate(e.target.textContent))
});