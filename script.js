let text = document.getElementById("text");

words = ["Yes", "No", "Sure", "Not really", "42", "Try again...", "Error", "Don't count on it", "You can count on it", "Don't ask ME!?", "Never.", "Don't even think about it", "Good for me!", "YES!", "Absolutely!", "Absolutely... NOT! SIKE", "Probably", "Do YOU think so?"];

function generate() {
  let random = Math.floor(Math.random() * words.length);
  text.innerHTML = words[random];
}

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 32) {
    generate();
  }
})