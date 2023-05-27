let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let playerTurn = 'X';

let cells = Array.from(document.querySelectorAll('.cell'));

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        let rowIndex = Math.floor(index / 3);
        let colIndex = index % 3;
        
        if (board[rowIndex][colIndex] !== '') {
            return; // If cell is already filled, do nothing.
        }
        
        board[rowIndex][colIndex] = playerTurn;
        cell.textContent = playerTurn;
        
        if (checkWin(playerTurn)) {
            setTimeout(() => {
                alert(playerTurn + ' wins!');
                resetGame();
            }, 100);
        } else {
            playerTurn = (playerTurn === 'X') ? 'O' : 'X'; // Switch turn
        }
    });
});


function checkWin(player) {
    // Add code to check win condition
    for (let i = 0; i < 3; i++) {
        // Check for horizontal
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
        // Check for vertical
        else if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
        // check for diagonal
        else if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        }
        else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        }
    }

    return false;
}

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGame);

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    playerTurn = 'X';
    cells.forEach(cell => cell.textContent = '');
}