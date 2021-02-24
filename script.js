
/* --- Variables -- */

let text = document.getElementById("text");
let lightning = document.getElementById("lightning");
let rock = document.getElementById("rock");

// ADD OR REMOVE HERE TO YOUR LIKING
let answers = ["Yes", "No", "Sure", "Not really", "42", "Try again...", "Error", "Don't count on it", "You can count on it", "Don't ask ME!?", "Never.", "Don't even think about it", "Good for me!", "YES!", "Absolutely!", "Absolutely... NOT! SIKE", "Probably", "Do YOU think so?", "Ask Wikipedia...", "Never gonna give you up...", "My sources says no", "Of course!", "I'm 100% certain.", "Google it?"];

/* --- Functions --- */

// Shaking the rock
function shake() {
  rock.style.animation = "shake 0.5s";
  rock.style.animationIterationCount = "infinite";
  text.innerHTML = "Listening...";
  document.getElementById("info").style.display = "none";
}

// Generating our answer based on the length of the 'answers' list.
function generate() {
  rock.style.animation = "none";
  let random = Math.floor(Math.random() * answers.length);
  text.innerHTML = answers[random];
}

/* --- Events --- */

document.addEventListener("keypress", function(event) {
  // Checking if we're holding down the spacebar
  if (event.keyCode == 32) {
    shake();
  }
});

document.addEventListener("keyup", function(event) {
  // Checking if we've released the spacebar
  if (event.keyCode == 32) {
    generate();
  }
  
  if (event.keyCode == 17) {
    if (event.keyCode == 187) {
      event.preventDefault();
    }
  }
});