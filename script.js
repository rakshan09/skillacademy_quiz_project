// Script to handle quiz logic
let userName = "";
let score = 0;
let currentQuestion = 0;
let questions = [];
let selectedCategory = null; 

// When a category is clicked, store it in the selected category
function selectCategory(category) {
    selectedCategory = category;
    localStorage.setItem("selectedCategory", selectedCategory);  // Save it to localStorage

    alert(`Category '${category}' selected! Please press Enter to start the quiz.`);
}
// function selectCategory(category) {
//     // Remove highlight from previous selection
//     const categoryElements = document.querySelectorAll('.category');
//     categoryElements.forEach(elem => elem.classList.remove('highlight'));

//     // Find the clicked category element and highlight it
//     const selectedElement = Array.from(categoryElements).find(elem => elem.innerText === category);
//     if (selectedElement) {
//         selectedElement.classList.add('highlight');
//     }

//     // Update selected category and save to localStorage
//     selectedCategory = category;
//     localStorage.setItem("selectedCategory", selectedCategory);

//     alert(`Category '${category}' selected! Please press Enter to start the quiz.`);
// }

function isValidName(name) {
    // Validate that the name contains only letters and spaces
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
}

// Handle Enter button click
document.getElementById("enterButton").addEventListener("click", () => {
    let userName = document.getElementById("username").value.trim();
    
    // Check if username is entered
    if (userName === "") {
        alert("Please enter your name.");
        return;
    }

    // Validate name
    if (!isValidName(userName)) {
        alert("Please enter a valid name with only letters and spaces.");
        return;
    }

    // Check if a category is selected
    if (!selectedCategory) {
        alert("Please choose a category to start the quiz.");
        return;
    }

    // Store user name and category in localStorage
    localStorage.setItem("userName", userName);
    localStorage.setItem("selectedCategory", selectedCategory);
    
    // Navigate to the quiz page
    window.location.href = "quiz.html";
});