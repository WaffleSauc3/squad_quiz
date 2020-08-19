function startQuiz(){
  localStorage.setItem("currentQuestion", Number(0));

  localStorage.setItem("mPoints", Number(0));
  localStorage.setItem("aPoints", Number(0));
  localStorage.setItem("dPoints", Number(0));
  localStorage.setItem("tPoints", Number(0));
  localStorage.setItem("nPoints", Number(0));
  localStorage.setItem("sPoints", Number(0));

  window.location.href = "MultipleChoiceQuestion.html";
};
