import { generateId } from "../utils/GenerateId.js"

export class Question {
    constructor(data) {
        this.id = generateId()
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswer = data.incorrect_answers
    }
    get questionCardTemplate() {
        return `
        <div class="col-md-6 mb-3">
        <div class="bg-secondary p-2 shadow border border-dark">
        <p class="fs-4">Question: ${this.question}</p>
        <p>Difficulty Level: ${this.difficulty} </p>
        <p>Type: ${this.type}</p>
        <button onclick="app.QuestionsController.answerQuestions('True', '${this.id}')">True</button>
        <button onclick="app.QuestionsController.answerQuestions('False', '${this.id}')">False</button>
        </div>

        </div>
        `
    }
}
const questionData = {
    // "category": "Sports",
    // "type": "multiple",
    // "difficulty": "medium",
    // "question": "Which German sportswear company&#039;s logo is the &#039;Formstripe&#039;?",
    // "correct_answer": "Puma",
    // "incorrect_answers": [
    //     "Nike",
    //     "Adidas",
    //     "Reebok"
    // ]
}