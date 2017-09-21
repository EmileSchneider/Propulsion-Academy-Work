class Game ()
  listOfQuestions = [questObj,questObj2]

  function askQuestion(n){
    var question =  this.listOfQuestions[n]
    console.log(question.question)
    console.log(questions.answers)
    var answer = getAnswersFromUser();
    checkAnswer(answer);
  }

class TrivialQuestion(question, answers, correctAnswer)  {
  this.question = "what is air?"
  this.answers = ["God", "Love", "Molecules", "airplanes"];
  this.correctAnswers = this.answers[2];
}
