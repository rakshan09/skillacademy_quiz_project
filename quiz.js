let currentQuestionIndex = 0;
let score = 0;
let startTime;
let questions = [];
let timerInterval;
let timeLeft = 10;
const questionSets = {
    "Pipes and Cisterns": [
        { question: " Two pipes A and B can fill a tank in 10 hours and 15 hours respectively. If both are opened together, how much time will it take to fill the tank?", options: ["6 hours", "5 hours", "8 hours", "9 hours"], answer: 0 },
    { question: "Pipe A can fill a tank in 20 hours, and pipe B can fill the same tank in 30 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["9 hours", "10 hours", "15 hours", "12 hours"], answer: 3 },
    { question: "A pipe can fill a tank in 6 hours, and another pipe can empty it in 9 hours. If both pipes are opened together, in how much time will the tank be filled?", options: ["12 hours", "18 hours", "15 hours", "36 hours"], answer: 1 },
    { question: "Three pipes A, B, and C can fill a tank in 12 hours, 15 hours, and 20 hours, respectively. If all three pipes are opened together, how long will it take to fill the tank?", options: ["4 hours", "5 hours", "6 hours", "7 hours"], answer: 1 },
    { question: "A cistern has two pipes, one filling it and another emptying it. The filling pipe can fill the cistern in 8 hours and the emptying pipe can empty it in 12 hours. How long will it take to fill the cistern if both pipes are opened together?", options: ["24 hours", "16 hours", "48 hours", "32 hours"], answer: 1 },
    { question: "A pipe fills a tank in 5 hours, and another pipe can empty the tank in 7 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["19 hours", "17.5 hours", "35 hours", "28 hours"], answer: 2 },
    { question: "Two pipes A and B can fill a tank in 24 minutes and 36 minutes, respectively. A third pipe C can empty the tank in 18 minutes. If all the pipes are opened together, how long will it take to fill the tank?", options: ["36 minutes", "45 minutes", "72 minutes", "54 minutes"], answer: 2 },
    { question: "Pipe A fills a tank in 8 hours, and pipe B fills the same tank in 12 hours. Pipe C can empty the tank in 6 hours. If all three pipes are opened together, how long will it take to fill the tank?", options: ["18 hours", "24 hours", "20 hours", "36 hours"], answer: 1 },
    { question: "Pipe A can fill a tank in 4 hours, and pipe B can fill the same tank in 5 hours. Pipe C can empty the tank in 10 hours. How long will it take to fill the tank if all pipes are opened together?", options: ["3 hours", "1 hours", "2 hours", "4 hours"], answer: 0 },
    { question: "A cistern has a leak which can empty it in 10 hours. If a pipe fills water at a rate that would fill the cistern in 8 hours, how long will it take to fill the cistern when the leak is also there?", options: ["10 hours", "20 hours", "35 hours", "40 hours"], answer: 3 },
        // Add more questions for Pipes and Cisterns...
    ],
    "Probability": [
        { question: "What is the probability of rolling a sum of 7 with two six-sided dice?", options: ["6 hours", "5 hours", "8 hours", "9 hours"], answer: 0 },
        { question: "Pipe A can fill a tank in 20 hours, and pipe B can fill the same tank in 30 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["9 hours", "10 hours", "15 hours", "12 hours"], answer: 3 },
        { question: "A pipe can fill a tank in 6 hours, and another pipe can empty it in 9 hours. If both pipes are opened together, in how much time will the tank be filled?", options: ["12 hours", "18 hours", "15 hours", "36 hours"], answer: 1 },
        { question: "Three pipes A, B, and C can fill a tank in 12 hours, 15 hours, and 20 hours, respectively. If all three pipes are opened together, how long will it take to fill the tank?", options: ["4 hours", "5 hours", "6 hours", "7 hours"], answer: 1 },
        { question: "A cistern has two pipes, one filling it and another emptying it. The filling pipe can fill the cistern in 8 hours and the emptying pipe can empty it in 12 hours. How long will it take to fill the cistern if both pipes are opened together?", options: ["24 hours", "16 hours", "48 hours", "32 hours"], answer: 1 },
        { question: "A pipe fills a tank in 5 hours, and another pipe can empty the tank in 7 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["19 hours", "17.5 hours", "35 hours", "28 hours"], answer: 2 },
        { question: "Two pipes A and B can fill a tank in 24 minutes and 36 minutes, respectively. A third pipe C can empty the tank in 18 minutes. If all the pipes are opened together, how long will it take to fill the tank?", options: ["36 minutes", "45 minutes", "72 minutes", "54 minutes"], answer: 2 },
        { question: "Pipe A fills a tank in 8 hours, and pipe B fills the same tank in 12 hours. Pipe C can empty the tank in 6 hours. If all three pipes are opened together, how long will it take to fill the tank?", options: ["18 hours", "24 hours", "20 hours", "36 hours"], answer: 1 },
        { question: "Pipe A can fill a tank in 4 hours, and pipe B can fill the same tank in 5 hours. Pipe C can empty the tank in 10 hours. How long will it take to fill the tank if all pipes are opened together?", options: ["3 hours", "1 hour", "2 hours", "4 hours"], answer: 0 },
        { question: "A cistern has a leak which can empty it in 10 hours. If a pipe fills water at a rate that would fill the cistern in 8 hours, how long will it take to fill the cistern when the leak is also there?", options: ["10 hours", "20 hours", "35 hours", "40 hours"], answer: 3 },
        // Add other questions here...
    ],
    "Problems on Age": [
         { question: "Two pipes A and B can fill a tank in 10 hours and 15 hours respectively. If both are opened together, how much time will it take to fill the tank?", options: ["6 hours", "5 hours", "8 hours", "9 hours"], answer: 0 },
        { question: "Pipe A can fill a tank in 20 hours, and pipe B can fill the same tank in 30 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["9 hours", "10 hours", "15 hours", "12 hours"], answer: 3 },
        { question: "A pipe can fill a tank in 6 hours, and another pipe can empty it in 9 hours. If both pipes are opened together, in how much time will the tank be filled?", options: ["12 hours", "18 hours", "15 hours", "36 hours"], answer: 1 },
        { question: "Three pipes A, B, and C can fill a tank in 12 hours, 15 hours, and 20 hours, respectively. If all three pipes are opened together, how long will it take to fill the tank?", options: ["4 hours", "5 hours", "6 hours", "7 hours"], answer: 1 },
        { question: "A cistern has two pipes, one filling it and another emptying it. The filling pipe can fill the cistern in 8 hours and the emptying pipe can empty it in 12 hours. How long will it take to fill the cistern if both pipes are opened together?", options: ["24 hours", "16 hours", "48 hours", "32 hours"], answer: 1 },
        { question: "A pipe fills a tank in 5 hours, and another pipe can empty the tank in 7 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["19 hours", "17.5 hours", "35 hours", "28 hours"], answer: 2 },
        { question: "Two pipes A and B can fill a tank in 24 minutes and 36 minutes, respectively. A third pipe C can empty the tank in 18 minutes. If all the pipes are opened together, how long will it take to fill the tank?", options: ["36 minutes", "45 minutes", "72 minutes", "54 minutes"], answer: 2 },
        { question: "Pipe A fills a tank in 8 hours, and pipe B fills the same tank in 12 hours. Pipe C can empty the tank in 6 hours. If all three pipes are opened together, how long will it take to fill the tank?", options: ["18 hours", "24 hours", "20 hours", "36 hours"], answer: 1 },
        { question: "Pipe A can fill a tank in 4 hours, and pipe B can fill the same tank in 5 hours. Pipe C can empty the tank in 10 hours. How long will it take to fill the tank if all pipes are opened together?", options: ["3 hours", "1 hour", "2 hours", "4 hours"], answer: 0 },
        { question: "A cistern has a leak which can empty it in 10 hours. If a pipe fills water at a rate that would fill the cistern in 8 hours, how long will it take to fill the cistern when the leak is also there?", options: ["10 hours", "20 hours", "35 hours", "40 hours"], answer: 3 },
        // Add other questions here...
    ],
    "Profit and Loss": [
         { question: "Two pipes A and B can fill a tank in 10 hours and 15 hours respectively. If both are opened together, how much time will it take to fill the tank?", options: ["6 hours", "5 hours", "8 hours", "9 hours"], answer: 0 },
        { question: "Pipe A can fill a tank in 20 hours, and pipe B can fill the same tank in 30 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["9 hours", "10 hours", "15 hours", "12 hours"], answer: 3 },
        { question: "A pipe can fill a tank in 6 hours, and another pipe can empty it in 9 hours. If both pipes are opened together, in how much time will the tank be filled?", options: ["12 hours", "18 hours", "15 hours", "36 hours"], answer: 1 },
        { question: "Three pipes A, B, and C can fill a tank in 12 hours, 15 hours, and 20 hours, respectively. If all three pipes are opened together, how long will it take to fill the tank?", options: ["4 hours", "5 hours", "6 hours", "7 hours"], answer: 1 },
        { question: "A cistern has two pipes, one filling it and another emptying it. The filling pipe can fill the cistern in 8 hours and the emptying pipe can empty it in 12 hours. How long will it take to fill the cistern if both pipes are opened together?", options: ["24 hours", "16 hours", "48 hours", "32 hours"], answer: 1 },
        { question: "A pipe fills a tank in 5 hours, and another pipe can empty the tank in 7 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["19 hours", "17.5 hours", "35 hours", "28 hours"], answer: 2 },
        { question: "Two pipes A and B can fill a tank in 24 minutes and 36 minutes, respectively. A third pipe C can empty the tank in 18 minutes. If all the pipes are opened together, how long will it take to fill the tank?", options: ["36 minutes", "45 minutes", "72 minutes", "54 minutes"], answer: 2 },
        { question: "Pipe A fills a tank in 8 hours, and pipe B fills the same tank in 12 hours. Pipe C can empty the tank in 6 hours. If all three pipes are opened together, how long will it take to fill the tank?", options: ["18 hours", "24 hours", "20 hours", "36 hours"], answer: 1 },
        { question: "Pipe A can fill a tank in 4 hours, and pipe B can fill the same tank in 5 hours. Pipe C can empty the tank in 10 hours. How long will it take to fill the tank if all pipes are opened together?", options: ["3 hours", "1 hour", "2 hours", "4 hours"], answer: 0 },
        { question: "A cistern has a leak which can empty it in 10 hours. If a pipe fills water at a rate that would fill the cistern in 8 hours, how long will it take to fill the cistern when the leak is also there?", options: ["10 hours", "20 hours", "35 hours", "40 hours"], answer: 3 },
        // Add other questions here...
    ]

};

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);  // function Stop the timer interval
    }
}

function startTimer() {
    timeLeft = 10;
    document.getElementById("timer").textContent = `Time: ${timeLeft}s`;
    updateTimerDisplay();   // Initialize the display
    // Clear any previous interval
    if (timerInterval) clearInterval(timerInterval);

    // Start a new 10-seconds countdown
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Time: ${timeLeft}s`;
        updateTimerDisplay(); 
        if (timeLeft <= 0) {
            clearInterval(timerInterval);  // Stop the timer called
            markUnsolved();  // Mark question as unsolved
            nextQuestion();  // Automatically move to the next question
        }
    }, 1000);
}

function updateTimerDisplay() {
    let timerElement = document.getElementById("timer");
    timerElement.textContent = `Time: ${timeLeft}s`;

    // Change color based on remaining time
    if (timeLeft <= 4) {
        timerElement.style.color = 'red';  // Make the timer red in the last 3 seconds
    } else {
        timerElement.style.color = 'green';  // Otherwise keep it green
    }
}

// Initialize quiz
function startQuiz() {
    const selectedCategory = localStorage.getItem("selectedCategory");
    questions = questionSets[selectedCategory] || []; //Questions will be load based on selected category
    currentQuestionIndex = 0;
    score = 0;
    startTime = new Date();
    startTimer();
    displayQuestion();
    
}

// Display the current question
function displayQuestion() {

    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById("question-text").textContent = currentQuestion.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";   // Clear previous options

    currentQuestion.options.forEach((option, index) => {
        let optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add('option-btn');  // Optional class for styling
        optionButton.onclick = () => {
            highlightSelectedButton(optionButton);  // Highlight the clicked button
            checkAnswer(index);  // Check the answer when clicked
            disableOptions();    // Disable all buttons once an option is selected
            document.getElementById("nextButton").disabled = false;  
        };
        optionsDiv.appendChild(optionButton); 
    });

    document.getElementById("nextButton").disabled = true; // Disable Next button until an answer is selected
    startTimer(); // Start the 10-second timer for new question
}

// Mark question as unsolved and move to the next
function markUnsolved() {
    console.log(`Question ${currentQuestionIndex + 1} was not answered in time.`);
    // Here, we don't increment the score, just mark it as unsolved as user has not selected any options
}

// Disable all option buttons after selection or time expiry
function disableOptions() {
    let optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = true;  // Disable all buttons
    });
}

// Highlight the selected answer button
function highlightSelectedButton(selectedButton) {
    // Remove highlight from all buttons first
    let optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.classList.remove('highlight');  // Remove highlight from all buttons
    });
    
    // Add highlight class to the clicked button
    selectedButton.classList.add('highlight');
}


function checkAnswer(selectedIndex) {
     // Check if the selected index matches the correct answer index
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;  // Increment score if the answer is correct
    }
    document.getElementById("score").textContent = `Score: ${score}`;   // Update score display
    clearInterval(timerInterval);  // Stop the timer when an answer is selected
    document.getElementById("nextButton").disabled = false;  // Enable Next button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();  // Display the next question
        document.getElementById("nextButton").disabled = true;
    } else {
        finishQuiz();// If there are no more questions, finish the quiz and show the results
    }
}

function finishQuiz() {
    stopTimer();
    const endTime = new Date();  // Get the time when the quiz ends
    const timeTaken = Math.floor((endTime - startTime) / 1000);  // Time in seconds
    
    // Store quiz result in localStorage
    localStorage.setItem("quizResult", JSON.stringify({
        name: localStorage.getItem("userName"),
        score: score,
        totalQuestions: questions.length,
        timeTaken: timeTaken,   
    }));
    window.location.href = "result.html";
}

// window.onload = startQuiz;
window.onload = function() {
    const userName = localStorage.getItem("userName");
    const selectedCategory = localStorage.getItem("selectedCategory");

    // Check if userName and category are set; if not, redirect to main page
    if (!userName || !selectedCategory) {
        alert("Please enter your name and select a category to start the quiz.");
        window.location.href = "main.html";
        return;
    }

    // Proceed with starting the quiz
    startQuiz();
};

window.onload = loadResult;
