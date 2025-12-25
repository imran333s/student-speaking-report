SpeechAce Speaking Assessment Report – Frontend Assignment
About the Project

This project is a simple frontend report page that displays a student’s speaking
assessment result. The layout is inspired by SpeechAce / IELTS-style score reports.

The purpose of this assignment is to demonstrate:

Frontend UI skills

Logical thinking using simple conditions

Clean and readable React code

This is a functional prototype created for evaluation purposes.

Features Implemented

Overall speaking score (out of 9)

Skill-wise scores:

Pronunciation

Fluency

Vocabulary

Grammar

Visual progress bars for each skill

Color-based score display:

Green for scores ≥ 7

Orange for scores < 7

Descriptive feedback generated automatically based on score ranges

Only the top section of the report is implemented as required.
Lower sections like per-question transcript and feedback are intentionally not included.

Tech Stack

React (Create React App)

JavaScript

HTML & CSS

No backend, database, authentication, or admin panel is used.

Where the Data Is Stored

All score values are stored in a static file:

src/data/reportData.js


Only one student record is used, as required in the assignment.

Feedback Logic

Descriptive feedback is generated using simple conditional logic:

Score ≥ 8
→ Excellent performance with strong control.

Score between 6 and 7
→ Good performance with minor inaccuracies.

Score < 6
→ Needs improvement.

The feedback updates automatically when score values change.

How to Run the Project (Step-by-Step)
1. Clone the repository
git clone https://github.com/imran333s/student-speaking-report.git

2. Go to the project folder
cd student-speaking-report

3. Install dependencies
npm install

4. Start the development server
npm start


The app will run on:
👉 http://localhost:3000