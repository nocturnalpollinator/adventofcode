const b = require('fs').readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')
const lineLength = b[0].length
const board = b.join('').split('')

// const farView = (board, i, j, iInc, jInc) => (
//     board[i] == undefined || board[i + (lineLength * (j + 1))] == undefined ? '.' : 
//     ('L#'.includes(board[i + (lineLength * (j + 1))]) ? board[i + (lineLength * (j + 1))] : farView(board, i + iInc, j + jInc, iInc, jInc))
// )

// const farView = (board, i, j, iInc, jInc) => (
//     board[i] == undefined || board[i][j] == undefined ? '.' : 
//     ('L#'.includes(board[i][j]) ? board[i][j] : farView(board, i + iInc, j + jInc, iInc, jInc))
// )

const farView = (board, i, g) => {
    console.log(board, i, g)
}

const outOfBounds = (i, g) => (i % lineLength == 0 && g[1] == -1) || (i % lineLength == lineLength - 1 && g[1] == 1)

const occupied = (board, i, g) => !outOfBounds(i, g) && board[i + (g[0] * lineLength) + g[1]] == '#'

const next = (board, val, i, tolerance, fw) => {
    occ = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
          .map(g => fw ? farView(board, i, g, lineLength) : occupied(board, i, g))
          .filter(x => x).length
    return occ >= tolerance && val == '#' ? 'L' : (occ == 0 && val == 'L' ? '#' : val)
}

const nextGeneration = (board, fw = false) => {
    const nextGen = board.map((val, i) => next(board, val, i, 4, fw))
    return JSON.stringify(nextGen) !== JSON.stringify(board) ? nextGeneration(nextGen, fw) : board
}

console.log(nextGeneration(board).filter(item => item == '#').length)
console.log(nextGeneration(board, true).filter(item => item == '#').length)
