const clickMe = document.getElementById('btn');
const colorValue = document.querySelector(".color-hex")

clickMe.addEventListener("click", function () {
	const randomColor = getRandomHex();
	document.body.style.backgroundColor = "#" + randomColor  ;
	colorValue.textContent = "#" + randomColor;
})

function getRandomHex () {
	return Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

/* OR 

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", 
"B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

 */