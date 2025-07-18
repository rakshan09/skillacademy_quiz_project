function loadResult() {
    const resultData = JSON.parse(localStorage.getItem("quizResult"));
    document.getElementById("result-name").textContent = resultData.name;
    document.getElementById("total-questions").textContent = resultData.totalQuestions;
    document.getElementById("correct-answers").textContent = resultData.score;
    document.getElementById("wrong-answers").textContent = resultData.totalQuestions - resultData.score;
    document.getElementById("percentage").textContent = ((resultData.score / resultData.totalQuestions) * 100).toFixed(2);
    

    // Convert total time from seconds to minutes and seconds format
    const minutes = Math.floor(resultData.timeTaken / 60);
    const seconds = resultData.timeTaken % 60;
    document.getElementById("total-time").textContent = `${minutes}m ${seconds}`;  // Display the total time

}

function restartQuiz() {
    localStorage.removeItem("quizResult");
    window.location.href = "quiz.html";
}

function goToHome() {
    localStorage.removeItem("quizResult");
    window.location.href = "main.html";
}

window.onload = loadResult;
