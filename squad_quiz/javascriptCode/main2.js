// This is an object meant to hold number values based on which number on a 1-10 scale would represent which person.
function NumberAnswer(text, matthew, adam, dionisi, theo, nico, spiros){

  this.text = text;
  this.matthew = matthew
  this.adam = adam;
  this.dionisi = dionisi;
  this.theo = theo;
  this.nico = nico;
  this.spiros = spiros;

  this.squad_list = [this.matthew, this.adam, this.dionisi, this.theo, this.nico, this.spiros];
};

//  This is the function to add points for the number
function numberPointAdder(answer, pointHolder, answerSelected){
  for(var i=0; i<answer.squad_list.length; i++){
    if(answer.squad_list[i].includes(answerSelected)){
      pointHolder[i]++;
    }
  }
};

var na1 = new NumberAnswer("On a scale of 1-10 how smart would you consider yourself",
[7, 8], [7, 8, 9], [6, 7, 8], [5, 6, 7], [7, 8], [5, 6, 7]);

var na2 = new NumberAnswer("How healthy are you currently on a scale from 1-10",
[6, 7], [5, 6], [5, 6, 7], [3, 4, 5, 6], [8, 9], [7, 8, 9]);

var na3 = new NumberAnswer("How attractive do you think you are on a scale of 1-10",
[5, 6, 7], [6, 7, 8], [7, 8], [5, 6], [7, 8], [6, 7, 8]);

var na4 = new NumberAnswer("On a scale of 1-10 how much do you think you got your shit together",
 [6, 7, 8], [4, 5, 6], [5, 6], [5, 6], [7, 8, 9], [6, 7, 8]);

var na5 = new NumberAnswer("On a scale of 1-10 how happy are you",
[5, 6, 7], [3, 4, 5, 6], [5, 6, 7], [6, 7], [7, 8], [6, 7, 8]);

var arrayOfNumberedQuestions = [na1, na2, na3, na4, na5];


var pointList = [localStorage.getItem('mPoints'),
localStorage.getItem('aPoints'),
localStorage.getItem('dPoints'),
localStorage.getItem('tPoints'),
localStorage.getItem('nPoints'),
localStorage.getItem('sPoints')];

function storePoints(pointHolder){
  localStorage.setItem('mPoints', pointHolder[0]);
  localStorage.setItem('aPoints', pointHolder[1]);
  localStorage.setItem('dPoints', pointHolder[2]);
  localStorage.setItem('tPoints', pointHolder[3]);
  localStorage.setItem('nPoints', pointHolder[4]);
  localStorage.setItem('sPoints', pointHolder[5]);
}

function answerOneSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 1);
  storePoints(pointList);
}
function answerTwoSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 2);
  storePoints(pointList);
}
function answerThreeSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 3);
  storePoints(pointList);
}
function answerFourSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 4);
  storePoints(pointList);
}
function answerFiveSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 5);
  storePoints(pointList);
}
function answerSixSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 6);
  storePoints(pointList);
}
function answerSevenSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 7);
  storePoints(pointList);
}
function answerEightSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 8);
  storePoints(pointList);
}
function answerNineSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 9);
  storePoints(pointList);
}
function answerTenSelected(){
  currentQuestion = localStorage.getItem('currentQuestion');
  numberPointAdder(arrayOfNumberedQuestions[currentQuestion], pointList, 10);
  storePoints(pointList);
}

function answerSelected(){
  var currentQuestion = Number(localStorage.getItem('currentQuestion')) + 1;
  localStorage.setItem('currentQuestion', currentQuestion);
  window.document.location = "./numberedQuestions.html" + "?currentQuestion=" + localStorage.getItem('currentQuestion');
}

function placeQuestion(){
  currentQuestion = arrayOfNumberedQuestions[Number(localStorage.getItem('currentQuestion'))];
  document.getElementById("question").innerHTML = currentQuestion.text;
}

if(Number(localStorage.getItem("currentQuestion")) < arrayOfNumberedQuestions.length){
  document.addEventListener('DOMContentLoaded', placeQuestion);
}
else{
  window.location.href = "EndPage.html";
}

document.getElementById("b1").addEventListener("click", answerOneSelected);
document.getElementById("b2").addEventListener("click", answerTwoSelected);
document.getElementById("b3").addEventListener("click", answerThreeSelected);
document.getElementById("b4").addEventListener("click", answerFourSelected);
document.getElementById("b5").addEventListener("click", answerFiveSelected);
document.getElementById("b6").addEventListener("click", answerSixSelected);
document.getElementById("b7").addEventListener("click", answerSevenSelected);
document.getElementById("b8").addEventListener("click", answerEightSelected);
document.getElementById("b9").addEventListener("click", answerNineSelected);
document.getElementById("b10").addEventListener("click", answerTenSelected);

// would be better to put this into a loop but I'm on a roll
document.getElementById("b1").addEventListener("click", answerSelected);
document.getElementById("b2").addEventListener("click", answerSelected);
document.getElementById("b3").addEventListener("click", answerSelected);
document.getElementById("b4").addEventListener("click", answerSelected);
document.getElementById("b5").addEventListener("click", answerSelected);
document.getElementById("b6").addEventListener("click", answerSelected);
document.getElementById("b7").addEventListener("click", answerSelected);
document.getElementById("b8").addEventListener("click", answerSelected);
document.getElementById("b9").addEventListener("click", answerSelected);
document.getElementById("b10").addEventListener("click", answerSelected);
