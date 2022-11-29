const arr = ["#ff0000", "#ffa4c2", "#ffa400", "#ff53cb", "#ff530b", "#37919d"];
const clickMe = document.getElementById('btn');
const colorValue = document.querySelector(".color-hex");


clickMe.addEventListener("click", function () {
	const index = getRandomNumber();
	document.body.style.backgroundColor = arr[index];
	colorValue.textContent = arr[index];
})

function getRandomNumber () {
	return Math.floor(Math.random() * arr.length);
}
