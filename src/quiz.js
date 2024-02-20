class Quiz {
    // YOUR CODE HERE:
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;   
    }

     getQuestion() {

        return  this.questions[this.currentQuestionIndex];
     }
    
    moveToNextQuestion() {

        return this.currentQuestionIndex++;
    }

    shuffleQuestions() {

        for (let i = 0; i < this.questions.length; i++) {
            const randomChoice = Math.floor(Math.random() * (this.questions.length - 1) + i);
            
            const tempChoice = this.questions[i];
            this.questions[i] = this.questions[randomChoice];
        }

    }
    

    checkAnswer(answer) {
        const question = this.getQuestion()
        const correctAnswer = question.answer === answer
        
        if ( correctAnswer) {
            this.correctAnswers++;
        }
    }

    hasEnded() {

        return this.currentQuestionIndex === this.questions.length;
    }
}

