// 1. Basic selectors 
const header = document.querySelector('h1');                // select by tag name
const addButton = document.querySelector('#addBtn');        // select by ID
const studentCard = document.querySelector('.student-card'); // select by class

// 2. Nested selectors
const cardTitle = document.querySelector('.student-card h3');  // h3 inside student card
const containerParagraphs = document.querySelector('#container p'); // first paragraph in container

// 3. Attribute selectors
const maleRadio = document.querySelector('input[type="radio"][value="M"]');
const requiredInputs = document.querySelector('input[required]');
const emailInput = document.querySelector('input[type="email"]');

// 4. Pseudo-class selectors
const firstCard = document.querySelector('.student-card:first-child');
const lastCard = document.querySelector('.student-card:last-child');
const oddCards = document.querySelector('.student-card:nth-child(odd)');

// 5. Multiple selectors (first match only)
const headingOrButton = document.querySelector('h1, button');