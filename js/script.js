const container = document.querySelector("#container")
const resetButton = document.querySelector("#reset")

gridGenerator(16)

function gridGenerator(n) {
	container.replaceChildren();
	let squareWidthHeight = (400/n)+"px"
	for (let index = 0; index < n*n; index++) {
		const square = document.createElement('div');
		square.style.color = "black"
		square.style.height = squareWidthHeight
		square.style.width = squareWidthHeight
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
	gridGenerator(parseInt(squares));
});
