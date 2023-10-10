import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { Pop } from "../utils/Pop.js";



class QuestionsService {
    async getQuestions() {
        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=boolean')
        console.log('got questions', response.data.results);
        const newQuestions = response.data.results.map(questionPOJO => new Question(questionPOJO))
        AppState.questions = newQuestions
        console.log('questions in appstate', AppState.questions);
    }
    answerQuestions(answer, questionId) {
        let question = AppState.questions.find(question => question.id == questionId)
        console.log(question.correctAnswer, answer);
        if (question.correctAnswer == answer) {
            Pop.success('You got it right!')
        } else {
            Pop.error('you got it wrong sorry !')
        }

    }
}
export const questionsService = new QuestionsService()