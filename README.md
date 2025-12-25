
# SpeechAce Speaking Assessment Report – Frontend Assignment

## About the Project

This project is a simple frontend report page that displays a student’s speaking
assessment result. The layout is inspired by SpeechAce / IELTS-style score reports.

The purpose of this assignment is to demonstrate:

- Frontend UI skills
- Logical thinking using simple conditions
- Clean and readable React code

This is a functional prototype created for evaluation purposes.

---

## Features Implemented

- Overall speaking score (out of 9)
- Skill-wise scores:
  - Pronunciation
  - Fluency
  - Vocabulary
  - Grammar
- Visual progress bars for each skill
- Color-based score display:
  - Green for scores ≥ 7
  - Orange for scores < 7
- Descriptive feedback generated automatically based on score ranges

Only the top section of the report is implemented as required.  
Lower sections like per-question transcript and feedback are intentionally not included.

---

## Tech Stack

- React (Create React App)
- JavaScript
- HTML & CSS

No backend, database, authentication, or admin panel is used.

---

## Where the Data Is Stored

All score values are stored in a static file:

src/data/reportData.js

Only one student record is used, as required in the assignment.

---

## Feedback Logic

Descriptive feedback is generated using simple conditional logic:

- Score ≥ 8  
  → Excellent performance with strong control.

- Score between 6 and 7  
  → Good performance with minor inaccuracies.

- Score < 6  
  → Needs improvement.

The feedback updates automatically when score values change.

---

## Notes

- The UI design is inspired by SpeechAce for assignment reference only.
- The focus was kept on simplicity and clarity rather than overengineering.
- This project is not intended for production use.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about running tests for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed.

### `npm run eject`

**Note: this is a one-way operation. Once you eject, you can’t go back!**

This command will remove the single build dependency from your project.

---

## Learn More

You can learn more in the  
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the  
[React documentation](https://reactjs.org/).
=======
# student-speaking-report

