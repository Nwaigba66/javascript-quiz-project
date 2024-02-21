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
        const questions = this.questions.slice();
        for (let i = questions.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
           
        }
        this.questions = questions;
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


// DAY 2: Implement method filterQuestionsByDifficulty()

filterQuestionsByDifficulty(difficulty) {
    if ( typeof difficulty !== "number" || difficulty < 1 || difficulty > 3 ) {
        return;
    }
    const filteredQuestions = this.questions.filter((question) => {
        return question.difficulty === difficulty;
    });

    this.questions = filteredQuestions;
    return this.questions;
}

averageDifficulty() {
    const totalDifficulty = this.questions.reduce((total, question) => {
        return  total + question.difficulty;
        
    }, 0);
    const averageDifficulty = totalDifficulty / this.questions.length;
    return averageDifficulty;
    
}
}

