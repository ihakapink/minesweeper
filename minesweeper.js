document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// var board = 

const board = {}

const boardSize = 5

function generateBoard() {
  board.cells = []
  console.log('start of first for loop..')
  for (let i = 0; i < boardSize; i++) {
    console.log('Inside first for loop i = ', i)
    for (let x = 0; x < boardSize; x = x + 1) {
      console.log('Inside the second for loop x = ', x)
      const object = { col: i, row: x, hidden: true, isMine: Math.random() > 0.6 } // 0.34745282
      board.cells.push(object)
    }
  }
}

// generateBoard()

function startGame () {
  generateBoard()
  // Don't remove this function call: it makes the game work!
  board.cells.forEach(cell => {
    countSurroundingMines(cell)
  })

  // for (let i = 0; i < board.cells.length - 1; i = i + 1) {
  //   countSurroundingMines(board.cells[i])
  // }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT isMines visible?
// 2. Are all of the isMines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of isMines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isisMine` is true.
function countSurroundingMines (cell) {
  const { row, col } = cell
  // var col = cell.col
  // var row = cell.row

  const surroundingCells = getSurroundingCells(row, col)
  let count = 0

  surroundingCells.forEach(item => {
    if (item.isMine) {
      count = count + 1
    }
  })

  cell.surroundingMines = count
}