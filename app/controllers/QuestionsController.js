import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuestions() {
    const questions = AppState.questions
    let content = ''
    questions.forEach(question => content += question.questionCardTemplate)
    setHTML('questionCards', content)
}
export class QuestionsController {
    constructor() {
        console.log('questions controller is loaded')
        this.getQuestions()
        AppState.on('questions', _drawQuestions)
    }
    async getQuestions() {
        try {
            await questionsService.getQuestions()
            Pop.success('got the quesions!')

        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    answerQuestions(answer, questionid) {
        try {
            questionsService.answerQuestions(answer, questionid)
        } catch (error) {

        }
    }
}