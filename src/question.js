class Question {
    constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    shuffleChoices() {
        for (let i = 0; i < this.choices.length; i++) {
            const randomChoice = Math.floor(Math.random() * (this.choices.length - 1) + i);
            
            const tempChoice = this.choices[i];
            this.choices[i] = this.choices[randomChoice];
        }

    }
}