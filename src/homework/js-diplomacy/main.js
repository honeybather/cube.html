'use strict'; // Enables strict mode which helps catch common coding errors and unsafe actions.

// Function to change the color of elements with the 'color-change' class.
function changeColor() {
    // Select all elements with the class 'color-change'.
    const colorChangeEls = document.querySelectorAll('.color-change');
    
    // Iterate through each element in the NodeList.
    for (const el of colorChangeEls) {
        // Add the 'red' class to each element.
        el.classList.add('red');
    }
}

// Function to validate a number input.
function validateNumber(evt) {
    // Prevent the default form submission behavior.
    evt.preventDefault();
    
    // Select the input element with the id 'number-input'.
    const numberInput = document.querySelector('#number-input');
    
    // Convert the input value to a Number.
    const userNum = Number(numberInput.value);
    
    // Select the element with the id 'formFeedback'.
    const formFeedback = document.querySelector('#formFeedback');
    
    // Check if the input is not a number or greater than or equal to 10.
    if (isNaN(userNum) || userNum >= 10) {
        // If true, display an error message.
        formFeedback.innerText = 'Please enter a smaller number';
    } else {
        // If false, display a success message.
        formFeedback.innerText = 'You are good to go!';
    }
}

// Add an event listener to the element with the class 'color-changer' that triggers the changeColor function when clicked.
document.querySelector('.color-changer').addEventListener('click', changeColor);

// Add an event listener to the element with the class 'number-form' that triggers the validateNumber function when submitted.
document.querySelector('.number-form').addEventListener('submit', validateNumber);
