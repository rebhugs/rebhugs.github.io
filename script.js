/* .js files add interaction to your website */


/* MAILING LIST */
var displayName = document.getElementById("secret");
var button = document.getElementById("myButton");

button.addEventListener("click", displaySecret);

function displaySecret() {
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text + " you have now been added to our mailing list"
}

/* facts */
var quoteList = ["More than 1 in 3 children suffer with obesity and if untreated, 85% of these weight issues will continue into adulthood",
"67% men and 60% women are obese",
"20% of year 6 students were classified as obese",
"47% children are meeting the current physical activity guidelines",
"40% adults eat a healthy balanced diet"];

var quote = document.getElementById("fact");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayQuote);

function displayQuote(){
  quote.innerHTML = quoteList[count];
  count++;

  if (count == quoteList.length){
    count = 0;
  }
}

