function Answer(text, matthew, adam, dionisi, theo, nico, spiros){
  this.text = text;
  this.matthew = matthew;
  this.adam = adam;
  this.dionisi = dionisi;
  this.theo = theo;
  this.nico = nico;
  this.spiros = spiros;

  this.squad_list = [this.matthew, this.adam, this.dionisi, this.theo, this.nico, this.spiros];
}

function AnswerPoints()
{
  Answer.call(this);
  this.matthew_points = 0;
  this.adam_points = 0;
  this.dionisi_points = 0;
  this.theo_points = 0;
  this.nico_points = 0;
  this.spiros_points = 0;

  this.pointList = [this.matthew_points, this.adam_points, this.dionisi_points, this.theo_points, this.nico_points, this.spiros_points]
}

function NumberAnswer(text, matthew, adam, dionisi, theo, nico, spiros){

  this.text = text;
  this.matthew = matthew
  this.adam = adam;
  this.dionisi = dionisi;
  this.theo = theo;
  this.nico = nico;
  this.spiros = spiros;

  this.squad_list = [this.matthew, this.adam, this.dionisi, this.theo, this.nico, this.spiros];
}

function pointAdder(question, pointHolder){
  for(var i=0; i<question.squad_list.length; i++){
    if(question.squad_list[i] === true){
      pointHolder.pointList[i]++;
    }
  }
  console.log(question.squad_list, pointHolder.pointList);
}

var a1_1 = new Answer("Yes", false, false, true, true, true, false)
var a1_2 = new Answer("Probably not, life will most likely seperate us", false, true, false, false, false, false)
var a1_3 = new Answer("Not really sure but I hope so", false, false, false, false, false, true)
var a1_4 = new Answer("only time will tell", true, false, false, false, false, false)

var a2_1 = new Answer("0", false, true, false, false, false, false)
var a2_2 = new Answer("1", false, false, false, false, false, false)
var a2_3 = new Answer("2", false, false, true, true, true, true)
var a2_4 = new Answer("3+", true, false, false, false, false, false)

var a3_1 = new Answer("Anime/cartoon", false, true, false, false, true, false)
var a3_2 = new Answer("Documentaries", true, false, true, false, false, false)
var a3_3 = new Answer("Dramas", false, false, false, false, false, false)
var a3_4 = new Answer("Comedies", false, false, false, true, false, true)

var a4_1 = new Answer("KSI", true, true, false, false, false, true)
var a4_2 = new Answer("David Dobrick", false, false, false, true, true, false)
var a4_3 = new Answer("Logan Paul", false, false, false, false, false, false)
var a4_4 = new Answer("Pewdiepie", false, false, true, false, false, false)

var a5_1 = new Answer("Hockey", false, false, false, false, true, false)
var a5_2 = new Answer("Combat Sports", true, true, true, false, false, false)
var a5_3 = new Answer("Any sports during the olympics", false, false, false, true, false, true)
var a5_4 = new Answer("What's a sport", false, false, false, true, false, false)

var a6_1 = new Answer("It's just hair who cares", false, false, false, true, false, false)
var a6_2 = new Answer("Sexy", true, false, false, false, true, false)
var a6_3 = new Answer("Easy breezy beatiful", false, false, true, false, false, false)
var a6_4 = new Answer("Pretty normal nothing special", false, true, false, false, false, true)

var a7_1 = new Answer("Having fun because I'm young", true, true, false, false, true, true)
var a7_2 = new Answer("Finding my purpose", true, false, true, false, false, false)
var a7_3 = new Answer("Learning about things that interest me", false, false, false, true, false, false)
var a7_4 = new Answer("Nothing matters :(", false, false, false, false, false, false)

var a8_1 = new Answer("Owning my own buisness", false, true, false, false, false, true)
var a8_2 = new Answer("Earning a passive income and relaxing", false, false, true, true, false, false)
var a8_3 = new Answer("Doing some sort of creative work", true, false, false, false, true, false)
var a8_4 = new Answer("Being an athlete", false, false, false, false, true, false)

var a9_1 = new Answer("A trip", true, false, true, false, false, false)
var a9_2 = new Answer("A new car", false, false, true, true, false, false)
var a9_3 = new Answer("I'd buy a bunch of little things that add up to 10 000$", false, false, false, false, true, false)
var a9_4 = new Answer("I'd go to the casino and make it 20 000$", false, true, false, false, false, true)

var a10_1 = new Answer("Spider man", true, false, false, false, false, false)
var a10_2 = new Answer("Captain America", false, false, false, false, true, false)
var a10_3 = new Answer("Thor", false, false, true, false, false, true)
var a10_4 = new Answer("The Hulk", false, true, false, true, false, false)

var a11_1 = new Answer("To learn a new physical skill for a sport/activity", false, false, true, false, false, false)
var a11_2 = new Answer("To make your body stronger", true, false, false, false, true, false)
var a11_3 = new Answer("To look better", false, true, false, false, false, true)
var a11_4 = new Answer("The only workout I do is wanking", false, false, false, true, false, false)

var a12_1 = new Answer("Strategy", true, false, false, false, false, false)
var a12_2 = new Answer("Single Player", true, true, false, false, false, false)
var a12_3 = new Answer("Any game I can play with friends", false, false, false, false, true, true)
var a12_4 = new Answer("ny game that allows me to compete with other people", false, true, true, true, false, true)

var a13_1 = new Answer("A road trip", false, false, false, true, false, true)
var a13_2 = new Answer("An all inclusive resort", false, true, false, false, true, false)
var a13_3 = new Answer("A camping/hiking trip in nature", false, false, true, false, false, false)
var a13_4 = new Answer("A backpacking trip", true, false, false, false, false, true)

var na1 = new NumberAnswer("On a scale of 1-10 how smart would you consider yourself",
[8, 10], [8, 10], [7, 9], [7, 8], [7, 8], [7, 8])

var na2 = new NumberAnswer("How healthy are you currently on a scale from 1-10",
[6, 7], [5, 6], [4, 7], [4, 6], [5, 7], [8, 10])

var na3 = new NumberAnswer("How attractive do you think you are on a scale of 1-10",
[6, 8], [6, 8], [7, 9], [5, 6], [7, 8], [6, 8])

var na4 = new NumberAnswer("On a scale of 1-10 how much do you think you got your shit together",
 [7, 8], [5, 7], [5, 7], [5, 6], [7, 8], [5, 7])

var na5 = new NumberAnswer("On a scale of 1-10 how happy are you",
[7, 8], [6, 8], [5, 7], [6, 7], [7, 8], [5, 6])

var questionAndAnswers = {
  "Do you think the squad is going to stay a squad forever?": [a1_1, a1_2, a1_3, a1_4],
  "How many kids do you want?": [a2_1, a2_2, a2_3, a2_4],
  "Out of the following what is your favorite type of show?": [a3_1, a3_2, a3_3, a3_4],
  "Who is your favourite youtuber out of the following?": [a4_1, a4_2, a4_3, a4_4],
  "Which is your sport to watch out of the following?": [a5_1, a5_2, a5_3, a5_4],
  "How would you describe your hair?": [a6_1, a6_2, a6_3, a6_4],
  "What is most important yo you right now?": [a7_1, a7_2, a7_3, a7_4],
  "What is your dream job?": [a8_1, a8_2, a8_3, a8_4],
  "If you got 10 000$ and you had to spend it what would you spent it on?": [a9_1, a9_2, a9_3, a9_4],
  "Which Avenger character do you most relate to?": [a10_1, a10_2, a10_3, a10_4],
  "What is your incentive to workout?": [a11_1, a11_2, a11_3, a11_4],
  "What is your favorite type of game?": [a12_1, a12_2, a12_3, a12_4],
  "Which of the following sounds like the perfect vacation?": [a13_1, a13_2, a13_3, a13_4],
}

var arrayOfNumberedAnswers = [na1, na2, na3, na4, na5]


console.log(Object.keys(questionAndAnswers).length);
