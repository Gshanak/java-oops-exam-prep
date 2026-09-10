# Java OOPs Exam Prep - Interactive Learning Platform

An interactive web-based learning platform for Java Object-Oriented Programming exam preparation. Features 35 most probable exam questions across 5 units, cross-referenced from 6 source documents (Question Bank, Previous Year Question Paper, Model Papers, and Study Material).

## Features

- **35 High-Probability Questions** - 4 Essay + 3 Short Answer per unit, across 5 units
- **Interactive Flashcards** - Click to flip between question and detailed answer
- **Progress Tracking** - Mark questions as learned, track overall and per-unit progress
- **Smart Filters** - Filter by Essay, Short Answer, or Not Yet Learned
- **Probability Tags** - Each question tagged as VERY HIGH, HIGH, or MEDIUM-HIGH based on cross-reference frequency
- **Source Attribution** - Every question shows which documents it appeared in
- **Detailed Answers** - Includes key points, code examples, tables, and diagrams
- **Progress Persistence** - Your progress is saved in localStorage (no login required)
- **Responsive Design** - Works on desktop, tablet, and mobile
- **No Dependencies** - Pure HTML/CSS/JS, no frameworks or build tools needed

## Units Covered

| Unit | Topic | Questions |
|------|-------|-----------|
| 1 | OOPs Concepts and Java Programming | 4 Essay + 3 Short |
| 2 | Arrays and OOP Constructs | 4 Essay + 3 Short |
| 3 | Interfaces, Packages & Exception Handling | 4 Essay + 3 Short |
| 4 | Multithreading & Stream-based I/O | 4 Essay + 3 Short |
| 5 | GUI Programming with Swing | 4 Essay + 3 Short |

## How to Use

1. Open `index.html` in any modern web browser
2. Click a unit card to see all questions in that unit
3. Click any question to enter Study Mode (flashcard view)
4. Click the flashcard to flip it and reveal the answer
5. Use Previous/Next buttons to navigate between questions
6. Click "Mark Learned" to track your progress
7. Your progress is automatically saved

## Cross-Reference Methodology

Questions were selected by cross-referencing 6 Java-related documents:

1. **Java OOPs Question Bank** (165 questions across 5 units)
2. **BSCS-MJ 301 Question Paper** (December 2025 Previous Year Exam)
3. **OOPs Through JAVA Model Papers** (2 model papers with answers)
4. **JAVA Answers** (Study material with detailed answers)

Each question's probability was determined by how many independent sources featured that topic:
- **VERY HIGH** - Appears in 3+ independent sources
- **HIGH** - Appears in 2+ sources or is a core fundamental topic
- **MEDIUM-HIGH** - Appears in Question Bank and one model paper

## Deploy on GitHub Pages

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Under "Source", select the `main` branch
4. Your site will be available at `https://yourusername.github.io/java-oops-exam-prep/`

## Project Structure

```
java-oops-exam-prep/
├── index.html              # Main HTML page
├── css/
│   └── style.css           # All styling (dark theme, responsive)
├── js/
│   ├── questions-data.js   # All 35 questions with detailed answers
│   └── app.js              # App logic (navigation, flashcards, progress)
└── README.md               # This file
```

## Tech Stack

- Vanilla HTML5, CSS3, JavaScript (ES6)
- No frameworks, no build tools, no dependencies
- localStorage for progress persistence
- Works offline once loaded

## License

Free to use for educational purposes.
