// Colorful Colors Start Code

// Load Colors from Text File
let colors;
fetch("web-colors.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (colors = strData.split(/\r?\n/)));

// Output Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all") {
    displayAll();
  } else if (selection === "start-letter") {
    displayStartingLetter();
  } else if (selection === "random") {
    randomColor();
  }
}

// Menu Functions
function displayAll() {
  outputEl.innerHTML = colors.map((item, index) => `<div style="background-color: ${colors[index]}">${colors[index]}</div>`);
  outputEl.innerHTML = outputEl.innerHTML.replaceAll(",", "")
  outputEl.innerHTML+=`<p>Number of Colors: ${colors.length}</p>`
}

function displayStartingLetter() {
  let startLetter = prompt("Enter a starting letter: ").toLowerCase().trim()
  console.log("COLORS: " + colors)
  let foundColor = colors.filter(item => item.toLowerCase().startsWith(startLetter))
  foundColor ? outputEl.innerHTML = foundColor.map(item => `<div style="background: ${item}">${item}</div>`) : ""
  outputEl.innerHTML = outputEl.innerHTML.replaceAll(",", "")
  outputEl.innerHTML+= `<p>Number of Colors: ${foundColor.length}</p>`;
}

function randomColor() {
  let index = Math.floor(Math.random() * colors.length)
  outputEl.innerHTML = `<div style="background-color: ${colors[index]}">${colors[index]}</div>`
  outputEl.innerHTML+=`Random Color: ${colors[index]}`
}
