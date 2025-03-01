// Function to log events to our log area
function logEvent(message) {
    const logArea = document.getElementById('logArea');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = message;
    logArea.insertBefore(entry, logArea.firstChild); // adding a new element to the beginning of the log area.   // insertBefore(newElement, referenceElement)
}

// Clear log button
const clearButton = document.getElementById('clearLog');
clearButton.addEventListener('click', () => {
    document.getElementById('logArea').innerHTML = '';
    logEvent('Log cleared');
});

// Example 1: Click Events
document.getElementById('clickButton').addEventListener('click', function () {
    logEvent('Button was clicked!');

    // Change the button text when clicked
    this.textContent = 'Clicked!';

    // Reset text after 1 second
    setTimeout(() => {
        this.textContent = 'Click Me';
    }, 1000);
});

// Example 2: Mouse Events
const hoverBox = document.getElementById('hoverBox');

// When mouse enters the box
hoverBox.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#e74c3c'; // red
    logEvent('Mouse entered the box');
});

// When mouse leaves the box
hoverBox.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '#3498db'; // blue
    logEvent('Mouse left the box');
});

// When mouse is clicked on the box
hoverBox.addEventListener('click', function () {
    this.textContent = 'Clicked!';
    logEvent('Box was clicked');

    // Reset text after 1 second
    setTimeout(() => {
        this.textContent = 'Hover Me';
    }, 1000);
});

// Example 3: Keyboard Events
const keyInput = document.getElementById('keyInput');

// When a key is pressed down
keyInput.addEventListener('keydown', function (event) {
    logEvent(`Key pressed: ${event.key}`);
});

// When input value changes
keyInput.addEventListener('input', function () {
    logEvent(`Input value: ${this.value}`);
});

// Example 4: Form Events
const form = document.getElementById('sampleForm');

// When form is submitted
form.addEventListener('submit', function (event) {
    // Prevent the default action (page reload)
    event.preventDefault();

    const name = this.querySelector('input').value || 'Anonymous';
    logEvent(`Form submitted with name: ${name}`);

    // Reset the form
    this.reset();
    // this.querySelector('input').value = '';
});