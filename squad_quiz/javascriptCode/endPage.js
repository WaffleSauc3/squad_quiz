var pointList = [Number(localStorage.getItem("mPoints")),
Number(localStorage.getItem("aPoints")),
Number(localStorage.getItem("dPoints")),
Number(localStorage.getItem("tPoints")),
Number(localStorage.getItem("nPoints")),
Number(localStorage.getItem("sPoints"))];

function getHighestNumber(list){
  var highestNumber = list[0];
  var placeOfHighestNumber = 0;

  for(var i=1; i<list.length; i++){
    if(list[i] > highestNumber){
      highestNumber = list[i];
      placeOfHighestNumber = i;
    }
  }
  return placeOfHighestNumber;
}

function iSmart(){
  alert("It's cuz im a genius");
}

function youWrong(){
  alert("you answered wrong then moron");
}

function youChill(){
  alert("you're chill");
}

function youGay(){
  alert("you're gay");
}

var winner = getHighestNumber(pointList);

switch(winner){
  // Matthew
  case 0:

  document.getElementById("name").innerHTML = "CONGRATS, YOU GOT MATTHEW";
  document.getElementById("faceshot").src = "./images/Matthew.jpg";

  document.getElementById("description").innerHTML = "Most likely the greatest human to have ever graced the planet Earth";

  break;

  // Adam
  case 1:

  document.getElementById("name").innerHTML = "CONGRATS, YOU GOT ADAM";
  document.getElementById("faceshot").src = "./images/Adam.jpg";

  document.getElementById("description").innerHTML = "Yound melz is a rapper of morrocan descent who moved out of the city to live inside a cave and write raps and play destiny all day";

  break;

  // Dionisi
  case 2:

  document.getElementById("name").innerHTML = "CONGRATS, YOU GOT DIONISI";
  document.getElementById("faceshot").src = "./images/Dionisi.jpg";

  document.getElementById("description").innerHTML = "kung Fu apprentice, professional jumper of sky and a brick, he has it all";

  break;

  // Theo
  case 3:

  document.getElementById("name").innerHTML = "CONGRATS, YOU GOT THEO";
  document.getElementById("faceshot").src = "./images/Theo.jpg";

  document.getElementById("description").innerHTML = "Currently holds the world record for longest time without a shower, this man is somehow still healthy after not moving a muscle inside a twenty year span";

  break;

  // Nico
  case 4:

  document.getElementById("name").innerHTML = "CONGRATS, YOU GOT NICO";
  document.getElementById("faceshot").src = "./images/Nico.jpg";

  document.getElementById("description").innerHTML = "NHL draft pick, only squad member to succesfully pursue education of any kind, is shit at lazer tag";

  break;

  // Spiros
  case 5:

  document.getElementById("name").innerHTML = "CONGRATS, YOU GOT SPIROS";
  document.getElementById("faceshot").src = "./images/Spiros.png";

  document.getElementById("description").innerHTML = "Hariest man on the planet Earth, literally lives in a zoo and is fed coffee so that people can pet him";

  break;
}

document.getElementById("yes1").addEventListener("click", iSmart);
document.getElementById("yes2").addEventListener("click", youChill);
document.getElementById("no1").addEventListener("click", youWrong);
document.getElementById("no2").addEventListener("click", youGay);
