
/* --- Variables -- */

let text = document.getElementById("text");
let lightning = document.getElementById("lightning");
let rock = document.getElementById("rock");

words = ["Yes", "No", "Sure", "Not really", "42", "Try again...", "Error", "Don't count on it", "You can count on it", "Don't ask ME!?", "Never.", "Don't even think about it", "Good for me!", "YES!", "Absolutely!", "Absolutely... NOT! SIKE", "Probably", "Do YOU think so?", "Ask Wikipedia...", "Never gonna give you up..."];

/* --- Functions --- */

function shake() {
  rock.style.animation = "shake 0.5s";
  rock.style.animationIterationCount = "infinite";
  text.innerHTML = "Listening...";
}

function generate() {
  rock.style.animation = "none";
  let random = Math.floor(Math.random() * words.length);
  text.innerHTML = words[random];
}

/* --- Events --- */

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 32) {
    shake();
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 32) {
    generate();
  }
  
  if (event.keyCode == 17) {
    if (event.keyCode == 187) {
      e.preventDefault();
    }
  }
});