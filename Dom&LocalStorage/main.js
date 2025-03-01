let studentCards = [];

//localstorage
//1.loadgrades

function loadGrades() {

    //1 get save data from local storage

    const json = localStorage.getItem("studentCards")
    if (!json) return;

    studentCards = JSON.parse(json)

    //display Function
    displayStudentsCards(); 

}

//2.saveData

function saveStudentCards() {

    //conevert variable to jason 

    const json = JSON.stringify(studentCards)
    localStorage.setItem("studentCards", json)
}

//DOM

function displayStudentsCards() {

    const container = document.getElementById("studentContainer")


    studentCards.forEach(student => {
        const card = creatStudentCard(student.name, student.grade, student.gender);
      
        container.appendChild(card);
    });
}

function creatStudentCard(name, grade, gender) {
    const card = document.createElement('div');
    card.className = "student-card";

    if (gender === "M") {
        card.classList.add("male-student")
    }
    else {
        card.classList.add("female-student")
    }
    card.innerHTML = `<h3>${name}</h3>
                        <p>Grade : <span class="grade">${grade} </span></p>
                         <p> Gender : ${gender === 'M' ? 'Male' : 'Female'}</p>
                          `;

    if (grade >= 70) {
        card.classList.add("high-grade")
    } else {
        card.classList.add("low-grade")
    }

    return card;
}

function addStudent() {
    const nameInput = document.getElementById('studentName')
    const gradeInput = document.getElementById('studentGrade')
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;

    const name = nameInput.value
    const grade = +gradeInput.value

    //validtae 
    if (name && grade >= 0 && grade <= 100) {

        const student = {
            name: name,
            grade: grade,
            gender: selectedGender

        }
        studentCards.push(student)
        saveStudentCards();

        const card = creatStudentCard(name, grade, selectedGender)
        document.getElementById('studentContainer').appendChild(card)

        nameInput.value = '';
        gradeInput.value= '';
    } else {
        alert('Please enter Valid Grade 0-100')
    }
}

function filterStudent(type) {
    const cards = document.querySelectorAll(".student-card"); // Correct selector for class

    cards.forEach(card => {
        const gradeElement = card.querySelector('.grade'); // Get grade element within the card
        const grade = parseInt(gradeElement.textContent); // Parse grade to number

        card.classList.remove('hidden'); // Initially show all cards
        card.classList.remove('appear'); // Remove 'appear' class if it was added

        if (type === "high") {
            if (grade <= 70) { // Hide if grade is NOT high
                card.classList.add("hidden");
            } else {
                card.classList.add("appear"); // Optionally add 'appear' for high grade
            }
        } else if (type === "low") {
            if (grade >= 70) { // Hide if grade is NOT low
                card.classList.add("hidden");
            } else {
                card.classList.add("appear"); // Optionally add 'appear' for low grade
            }
        }
        // 'all' type: no need to hide any, all cards are already shown by default
    });
}
