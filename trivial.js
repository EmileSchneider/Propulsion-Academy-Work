class Game {
  constructor(questions) {
    this.players = [];
    this.questions = questions;
    this.isRunning = true;
  }
  addPlayer(player) {
    this.players.push(player);
  }
  askQuestion(n, player) {
    console.log(player);
    var a = prompt("Question for "+ player.name + " " + this.questions[n].question, this.questions[n].answers);

    if(a == null) {
      this.isRunning = false;
    }
    else if(a != this.questions[n].correctAnswer) {
      alert("Wrong Answer, try again")
      this.askQuestion(n, player);
      player.errors++;
    } else {
      player.score++;
      alert("You little genius you, correct Answer");
    }
  }
  play() {
    var questionIndex = 0;
    var playerIndex = 0;
    while(questionIndex < this.questions.length && this.isRunning){
      this.askQuestion(questionIndex, this.players[playerIndex]);
      playerIndex++;
      if(!(playerIndex < this.players.length)){
        playerIndex = 0;
      }
      questionIndex++;
    }
    if(!this.isRunning){
      alert("You stopped the game. goodbye")
    } else {
      alert(this.players.forEach(function(player){alert(`${player.name} made ${player.errors} mistakes`)}));
    }
  }
}

class QuestionObj {
  constructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

class Player {
  constructor(name){
    this.name = name;
    this.score = 0;
    this.errors = 0;
  }
}

var quest1 = new QuestionObj("What is Air?", ["A","B","C","D"], "B");
var quest2 = new QuestionObj("What is Love?", ["A","B","C","D"], "C");
var quest3 = new QuestionObj("What is Hate?", ["A","B","C","D"], "D");
var quest4 = new QuestionObj("What is D-Day?", ["A","B","C","D"], "A");
var quest5 = new QuestionObj("What is the EU?", ["A","B","C","D"], "A");
var quest6 = new QuestionObj("What is Brexit?", ["A","B","C","D"], "C");
var quest7 = new QuestionObj("What is Greece?", ["A","B","C","D"], "B");
var listOfQuestions = [quest1, quest2, quest3, quest4, quest5, quest6, quest7];

var game = new Game(listOfQuestions);
var player = new Player("Emile");
var player2 = new Player("Julya");
game.addPlayer(player);
game.addPlayer(player2);
game.play();
