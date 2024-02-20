const container = document.querySelector("#container")
const resetButton = document.querySelector("#reset")
const containerWidth = container.clientWidth
console.log(containerWidth)

gridGenerator(16)

function gridGenerator(n) {
	container.replaceChildren();
	let squareWidthHeight = (containerWidth/n)
	let gridSize = n * n
	for (let index = 0; index < gridSize; index++) {
		const square = document.createElement('div');
		let borderOffset = 2
		square.style.height = (squareWidthHeight - borderOffset)+"px"
		square.style.width= (squareWidthHeight - borderOffset)+"px"
		square.style.border = "black solid 1px"
		container.appendChild(square);
	}
	const squares = document.querySelectorAll('#container>div');
	squareHoverListener(squares);
}

function hoverSquare() {
	this.style.backgroundColor = 'pink';
}


function squareHoverListener(squares) {
	squares.forEach(square => {
		square.addEventListener('mouseover', hoverSquare);
	});
};

resetButton.addEventListener('click', () => {
	const squares = prompt('Enter a number');
	squares <= 100 ? gridGenerator(parseInt(squares)): alert("Enter a valid number")
});
