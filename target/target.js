const paragraph = document.getElementById("intro");
paragraph.style.backgroundColor = "f2c556";

let emElement = document.querySelector("em"); // Selects the first <em> element
emElement.style.backgroundColor = 'acbfcc';


let img = document.createElement("img");
img.src = "https://bit.ly/3RfG4sY"; 

// Set alt text for accessibility
img.alt = "a spaceship "; 

// Optionally, set width and height
img.style.width = "300px";
img.style.display = "block";
img.style.margin = "10px auto";
img.style.border = " 10px";
img.id="ship"
img.className = "rounded";


// Append the image to an existing element (e.g., a div with id "container")
document.getElementById("starship").appendChild(img);