let players = ['x', 'o'];
let activePlayer = 0;
let board;

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  renderBoard(board);
};

function click(raw, col){
  board[raw][col] = players[activePlayer];

  renderBoard(board);

  checkWinner();

  if (activePlayer === 0) {    
    activePlayer = 1;
  } else if (activePlayer === 1) {
    activePlayer = 0;
  };
 
};

function checkWinner() {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === board[i][1] && 
        board[i][0] === board[i][2] && 
        board[i][0] === players[activePlayer]) {
      showWinner(activePlayer);
    };
  };

  for (let i = 0; i < board.length; i++) {
    if (board[0][i] === board[1][i] && 
        board[0][i] === board[2][i] && 
        board[0][i] === players[activePlayer]) {
      showWinner(activePlayer);
    };
  };

  if ((board[0][0] === board[1][1] && 
       board[2][2] === board[1][1] && 
       board[1][1] === players[activePlayer]) ||
      (board[0][2] === board[1][1] && 
       board[2][0] === board[1][1] && 
       board[1][1] === players[activePlayer])
  ) {
    showWinner(activePlayer);
  };
 }