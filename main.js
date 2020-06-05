// 1. A player starts their turn.
// 2. Player will click a cell.
// 3. Add their token (X or O) to that cell.
// 4. If player won, they will see a WIN message, if not, start over with the next player.

// GAME LOGIC
// - Keep track of whose turn it is.
// - Player X will have the first turn.
// - Keep track of which cells the player clicked.
// - Since no players have clicked on any cells yet, we will have empty histories of their clicks.
// - AddEventListener (CLICK) on each of the 9 cells.
//   - Get all nine cell elements in an array
//   - Loop over them, adding a click event listener to each.
//   - On click, add the player token (X or O).
//   - On click, record which cell the player clicked.
//      - Push cell element ID to the player's selection array. 
//   - On click, check if the player won.
//      - TODO: What do we need to do to get this done?
//   - On click, after everything is done for the current turn, change currentPlayer.

let currentPlayer = 'X'
let playerXSelections = []
let playerOSelections = []
const winningCombinations = [
    // Horizontal Win Combos:
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // Vertical Win Combos:
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // Diagonal Win Combos:
    [1, 5, 9],
    [3, 5, 7],
]


//define a function named checkForWin which accepts two arrays as arguments: winningCombination and playerSelections
//for every winning combination array in winningCombination
//create a matches variable to keep track of the number of matches we find in playerSelections
//for every number in the current combination array
//  if the playerSelections array contains the current number, increment matches by 1
//if matches is **equal** to 3, we found a win, so return true (which will stop the loop and exit the function)
//if we got through all combinations without returning true, then return false because no win was found
function checkForWin(winningCombinations, playerSelections) {

    //    var match1 = eachitem
    for (let i = 0; i < winningCombinations.length; i++) {
        let matches = 0
        let currentcombo = winningCombinations[i]


        for (let j = 0; j < currentcombo.length; j++) {
            let currentnum = currentcombo[j]
            if (playerSelections.includes(currentnum)) {
                matches++
                if (matches === 3) {
                    return true
                }



            }
        }
    } return false

}


const cellElements = document.querySelectorAll('.grid-cell')

for (let index = 0; index < cellElements.length; index += 1) {
    let cellElement = cellElements[index]
    cellElement.addEventListener('click', function () {
        console.log('Player clicked on cell ' + cellElement.id)
        cellElement.innerHTML = currentPlayer

        if (currentPlayer === 'X') {
            playerSelections = playerXSelections.push(Number(cellElement.id))
            if (checkForWin(winningCombinations, playerXSelections)) {
                alert("player X wins")
            }
            currentPlayer = 'O'
        } else if (currentPlayer === 'O') {
            playerOSelection = playerOSelections.push(Number(cellElement.id))
            if (checkForWin(winningCombinations, playerOSelections)) {
                alert("player O wins")
            }

            currentPlayer = 'X'
        }
    })
}

//on click if player win//
//record the previous click and check winningCombinations 
//let winCombinations = document.querySelectorAll('.grid-cell')
//winCombinations.addEventListener('click', function () {




