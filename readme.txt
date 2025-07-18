## 🧠 Features

- Category-based quiz selection
- Timer for each question (default: 10 seconds)
- Score tracking
- Automatic move to next question on timeout
- Question highlighting on selection
- Result screen with time taken and score
- Stores user and quiz data using `localStorage`

## 📌 How It Works

1. User enters their name and selects a category.
2. App loads questions from the `questionSets` object.
3. Each question is shown with a 10-second countdown.
4. If the timer expires or the user selects an answer:
   - It checks the answer.
   - Updates the score.
   - Disables further input.
5. Results are saved to `localStorage` and displayed on the result screen.

