{
let display = document.querySelector('.game-status')
let isGamePlaying = true
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// functions
let winningMessage = () => `Player ${currentPlayer} has won!`;

let drawMessage = () => `Game ended in a draw!`;

let currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

function restartGame() {
    isGamePlaying = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    display.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
    .forEach(cell => cell.innerHTML = "");
}

function swapPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    display.innerHTML = currentPlayerTurn();
}

let cellClick = (clickedCellEvent) => {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))
   
    if(gameState[clickedCellIndex] !== '' || !isGamePlaying) {
        return alert('Cell is Occupied!');
    };
    
    cellPlayed(clickedCell, clickedCellIndex);
    validate();
}

let cellPlayed = (clickedCell, clickedCellIndex) => {
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }

let validate = () => {
    let roundWon = false;
    let roundDraw = !gameState.includes("");
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        display.innerHTML = winningMessage();
        isGamePlaying = false;
        return;
    }
    if (roundDraw) {
        display.innerHTML = drawMessage();
        isGamePlaying = false;
        return;
    }
    swapPlayer();
}

display.innerHTML = currentPlayerTurn();

// Event Listeners
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.restart-btn').addEventListener('click', restartGame);
};