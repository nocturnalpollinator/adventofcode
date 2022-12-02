module.exports = {
    run: (glob) => {
        var file = glob.file.split('\n\n')
        var numbers = file.shift().split(',')
        var boards = file.map(x => x.replace(/\n/g, ' ').split(' ').filter(x => x != ''))
        var gridWidth = Math.sqrt(boards[0].length)
        var emptyBoards = Array.from(Array(boards.length), () => Array(gridWidth * gridWidth).fill(undefined))
        var firstWin = lastWin = 0
        var winningBoards = []
        const bingoSum = (board, x) => board.filter((v, i) => i % gridWidth == x % gridWidth).reduce((p, c) => p + c) || board.slice(x - (x % gridWidth), (x - (x % gridWidth)) + gridWidth).reduce((p, c) => p + c)

        numbers.forEach((n, ni) => {
            boards.forEach((b, i)  => {
                var index = b.indexOf(n)
                if (index !== -1) {
                    emptyBoards[i][index] = parseInt(n)
                    if (ni >= gridWidth && !isNaN(bingoSum(emptyBoards[i], index)) && winningBoards.indexOf(i) == -1) {
                        winningBoards.push(i)
                        lastWin = boards[i].reduce((p, c, j) => emptyBoards[i][j] == undefined ? p + parseInt(c) : p, 0) * n
                        firstWin = firstWin == 0 ? lastWin : firstWin
                    }
                }
            })
        });

        return { result: `Part I: ${firstWin} \nPart II: ${lastWin}` }
    }
}