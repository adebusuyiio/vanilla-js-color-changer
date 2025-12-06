// 1. SELECT ELEMENTS
// Select all buttons with the class 'color-btn'
const colorButtons = document.querySelectorAll('.color-btn');

// Select the specific reset button by its ID
const resetButton = document.getElementById('reset-btn');

// Select the <body> element, as this is the element whose color we want to change
const body = document.body;

// 2. DEFINE THE COLOR-CHANGING FUNCTION
// This function handles the logic for changing the background
function changeBackground(color) {
    // The core action: changing the style property of the body element
    body.style.backgroundColor = color;
}

// 3. SET UP EVENT LISTENERS FOR COLOR BUTTONS
// Loop through the list of color buttons
colorButtons.forEach(button => {
    // Attach a 'click' event listener to each button
    button.addEventListener('click', () => {
        // Read the color value stored in the custom 'data-color' attribute in HTML
        const newColor = button.getAttribute('data-color');
        
        // Call the changeBackground function with the retrieved color
        changeBackground(newColor);
        
        // Console logging for verification (optional, but helpful for debugging)
        console.log(`Background changed to: ${newColor}`);
    });
});

// 4. SET UP EVENT LISTENER FOR THE RESET BUTTON
resetButton.addEventListener('click', () => {
    // The reset function calls changeBackground with 'White'
    changeBackground('White');
    console.log('Background reset to White');
});