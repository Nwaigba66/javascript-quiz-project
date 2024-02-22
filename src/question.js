class Question {
    constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    shuffleChoices() {
        const choices = this.choices.slice();
        for (let i = choices.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            [choices[i], choices[randomIndex]] = [choices[randomIndex], choices[i]];
        }
        this.choices = choices;
    }
}