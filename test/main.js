// All students
let studentCards = [];

// ------------------------ LOCAL STORAGE  ------------------------

// Load data from localStorage when page loads
function loadGrades() {
    // Get saved data from localStorage
    const json = localStorage.getItem("studentCards");

    // If no json - do nothing: 
    if (!json) return;

    // Convert JSON into variable (object or array):
    studentCards = JSON.parse(json);

    // Display all saved students
    displayStudentCards();
}

// Save data to localStorage
function saveStudentCards() {
    // Convert variable (object or array) to JSON string
    const json = JSON.stringify(studentCards);

    // Save to localStorage
    localStorage.setItem("studentCards", json);
}

// ------------------------ DOM ------------------------

// Display all student cards in the container
function displayStudentCards() {    

    // 1. Get the container element
    const container = document.getElementById('studentContainer');

    // 2. Loop through each student and create their card
    studentCards.forEach(student => {

        const card = createStudentCard(student.name, student.grade, student.gender);

        // Add the card to the container
        container.appendChild(card);
    });
}

// Create a single student card element
function createStudentCard(name, grade, gender) {
    // 1. Create a new div element
    const card = document.createElement('div');

    // 2. Add CSS classes
    card.className = "student-card";

    // if (gender === "M") {
    //     card.classList.add('male-student');
    // } else {
    //     card.classList.add('female-student');
    // }

    // 3. Set HTML content of the card
    card.innerHTML = `
        <h3>${name}</h3>
        <p>Grade: <span class="grade">${grade}</span></p>
        <p>Gender: ${gender === 'M' ? 'Male' : 'Female'}</p>
        <button onclick="removeStudent(this)">Remove</button>
    `;

    // 5. Add class based on grade
    if (grade >= 70) {
        card.classList.add('high-grade');
    } else {
        card.classList.add('low-grade');
    }

    return card;
}

// Add a new student
function addStudent() {

    // 1. Get input values
    const nameInput = document.getElementById('studentName');
    const gradeInput = document.getElementById('studentGrade');
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;

    // 2. Get the values
    const name = nameInput.value;
    const grade = +gradeInput.value; // Convert string to number

    // 3. Validate input
    if (name && grade >= 0 && grade <= 100) {
        // 4. Create a student object
        const student = {
            name: name,
            grade: grade,
            gender: selectedGender
        };

        // 5. Add to our array
        studentCards.push(student);

        // 6. Save to localStorage
        saveStudentCards();

        // 7. Create and display the new card
        const card = createStudentCard(name, grade, selectedGender);
        document.getElementById("studentContainer").appendChild(card);

        // 8. Clear the input fields
        nameInput.value = '';
        gradeInput.value = '';
    } else {
        // Show error if invalid input
        alert('Please enter valid name and grade (0-100)');
    }
}

// Remove a student
function removeStudent(button) {
    // 1. Get the card element (parent of the button)
    const card = button.parentElement;

    // 2. Find the student info from the card
    const name = card.querySelector('h3').textContent;
    const grade = +card.querySelector('.grade').textContent;

    // 3. Find the student in our array 
    const index = studentCards.findIndex(student => 
        student.name === name && student.grade === grade
    );

    // 4. Remove from array if found
    if (index !== -1) {
        studentCards.splice(index, 1);

        // 5. Update localStorage
        saveStudentCards();
    }

    // 6. Remove the card from the DOM
    card.remove();
}

// Filter students by grade
function filterStudents(type) {
    // 1. Get all student cards
    const cards = document.querySelectorAll('.student-card');

    // 2. Go through each card
    cards.forEach(card => {
        // 3. Get the grade from this card (other way convert string to number)
        const grade = Number(card.querySelector('.grade').textContent);

        // 4. First make all cards visible
        card.classList.remove('hidden');

        // 5. Then hide based on filter type
        if (type === 'high' && grade < 70) {
            card.classList.add('hidden');
        } else if (type === 'low' && grade >= 70) {
            card.classList.add('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Add Enter keypress 
    document.getElementById('studentGrade').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addStudent();
        }
    });
});