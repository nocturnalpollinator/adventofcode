module.exports = {
    run: (helpers) => {
        const n = helpers.fsn
        const width = n[0].length
        const height = n.length
        const grid = n.map(x => x.split('')).flat()
        const scenicScore = [0];
        const scenicScores = []

        const countScenic = (basei, i, modifier) => scenicScore.setSingle(scenicScore.last == 0 ? Math.abs(basei - i) / Math.abs(modifier) : scenicScore.last * (Math.abs(basei - i) / Math.abs(modifier)))

        const borderCollision = i => i < width || i % width == 0 || i % width == width - 1 || i > width * height - width - 1

        const checkLine = (x, i, modifier, basei) => {
            if (x <= grid[i]) {
                countScenic(basei, i, modifier)
                return true
            }
            
            if (borderCollision(i)) {
                countScenic(basei, i, modifier)
                return false
            }

            return checkLine(x, i + modifier, modifier, basei)
        }

        const candidates = grid.map((x, i) => {
            if (borderCollision(i)) return false
            scenicScore.setSingle(0)

            const left = checkLine(x, i - 1, -1, i)
            const right = checkLine(x, i + 1, 1, i)
            const up = checkLine(x, i - width, -width, i) 
            const down = checkLine(x, i + width, width, i)

            scenicScores.push(scenicScore.last)

            return left && right && up && down
        })

        const pt1 = candidates.filter(x => !x).length
        const pt2 = scenicScores.sortNumDesc()[0]

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
