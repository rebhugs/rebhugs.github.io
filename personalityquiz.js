// personality quiz
var savouryScore = 0; // Store the savoury score
var sweetScore = 0; // Store the sweet score

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var result = document.getElementById("result");
var displayResult = document.getElementById("displayResult");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", sweet);
q1a2.addEventListener("click", savoury);

q2a1.addEventListener("click", savoury);
q2a2.addEventListener("click", sweet);

q3a1.addEventListener("click", sweet);
q3a2.addEventListener("click", savoury);

q4a1.addEventListener("click", savoury);
q4a2.addEventListener("click", sweet);

q5a1.addEventListener("click", sweet);
q5a2.addEventListener("click", savoury);

// Listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);

function myFunction() {
  var elmnt = document.getElementById("section1");
  elmnt.scrollIntoView();
}

// Track savoury score and check if quiz is complete
function savoury() {
  savouryScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "savouryScore = " + savouryScore);

  if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Track sweet score and check if quiz is complete
function sweet() {
  sweetScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "sweetScore = " + sweetScore);

  if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Update quiz result
function updateResult() {
  displayResult.addEventListener("click", display);
}

function display(){
  if (savouryScore >= 3) {
    result.innerHTML = "You are savoury!";
    document.getElementById("description").innerHTML="<span>You should check out this recipe for <a href = 'https://www.nhs.uk/change4life/recipes/tasty-veggie-chilli'>veggie chilli</a></span>"
    console.log("You are savoury!")
  } else if (sweetScore >= 3) {
    result.innerHTML = "You are sweet!";
    document.getElementById("description").innerHTML="<span>You should check out this recipe for <a href = 'https://www.nhs.uk/change4life/recipes/cherry-berry-crumble'>cherry berry crumble</a></span>"
    console.log("You are sweet!")
  }
}

// Restart quiz
function restartQuiz() {
  result.innerHTML = "You are ...";
  questionCount = 0;
  savouryScore = 0;
  sweetScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "sweetScore = " + sweetScore + "\t" + "savouryScore = " + savouryScore);
  enableQuestions();
}


q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}

function disableQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
}

function disableQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
}



// creating the scroll
function myFunction1() {
  var elmnt = document.getElementById("section2");
  elmnt.scrollIntoView();
}

function myFunction2() {
  var elmnt = document.getElementById("section3");
  elmnt.scrollIntoView();
}

function myFunction3() {
  var elmnt = document.getElementById("section4");
  elmnt.scrollIntoView();
}

function myFunction4() {
  var elmnt = document.getElementById("section5");
  elmnt.scrollIntoView();
}

function myFunction5() {
  var elmnt = document.getElementById("section6");
  elmnt.scrollIntoView();
}

function myFunction6() {
  var elmnt = document.getElementById("section1");
  elmnt.scrollIntoView();
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("displayResult");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
