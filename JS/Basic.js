let Questions = function (question, answer1, answer2, answer3, correctAnswer) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
    this.askQuestion = function () {
        console.log(this.question);
        console.log(this.answer1);
        console.log(this.answer2);
        console.log(this.answer3);
    }
    this.checkAnswer = function () {
        var answerQuestion = prompt('Write your answer');
        console.log(answerQuestion)
        if(answerQuestion == this.correctAnswer) {
            console.log(answerQuestion + ' is the correct answer!')
            playerScore ++;
            scoreCalculator();
            run();
        }
        else if (answerQuestion == 'exit') {
            alert('Game aborted! Your ending score is ' + playerScore)

        } 
        else {
            console.log(answerQuestion + ' is incorrect!');
            run();
            scoreCalculator();
        }
    }
};

let playerScore = 0;
let whoIsTheInstructor = new Questions('Who is the instructor?', '0:John', '1:Adrian', '2:Pau', '2');
let whatIsTheTopic = new Questions('What is the topic for today?', '0:Constructors', '1:IIFE', '2:Callback', '1');
let whatIsTheDifficultyLevel = new Questions('What is the set Difficulty Level for the topic?', '0:Easy', '1:Normal', '2:Hard', '2');
let questionArr = [whoIsTheInstructor, whatIsTheTopic, whatIsTheDifficultyLevel];
let scoreCalculator = () => {
    console.log('Your score is ' + playerScore)
}

(run = () => {
    var randomNumber = Math.floor(Math.random()* 3)
    questionArr[randomNumber].askQuestion();
    questionArr[randomNumber].checkAnswer();
})();