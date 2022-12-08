module.exports = {
    run: (helpers) => {
        const n = helpers.fsn
        const width = n[0].length
        const height = n.length
        const grid = n.map(x => x.split('')).flat()
        const scenicScore = [0];
        const scenicScores = []

        const setScenicScore = x => {
            scenicScore.pop()
            scenicScore.push(x)
        }

        const countScenic = (basei, i, modifier) => {
            if (scenicScore[0] == 0) {
                setScenicScore(Math.abs(basei - i) / Math.abs(modifier))
            } else {
                setScenicScore(scenicScore[0] * (Math.abs(basei - i) / Math.abs(modifier)))
            } 
        }

        const borderCollision = (x, i) => i < width || i % width == 0 || i % width == width - 1 || i > (width * height - width - 1)

        const checkLine = (x, i, modifier, basei) => {
            if (x <= grid[i]) {
                countScenic(basei, i, modifier)
                return true
            }
            
            if (borderCollision(x, i)) {
                countScenic(basei, i, modifier)
                return false
            }

            return checkLine(x, i + modifier, modifier, basei)
        }

        const candidates = grid.map((x, i) => {
            setScenicScore(0)
            if (borderCollision(x, i)) return false

            const left = checkLine(x, i - 1, -1, i)
            const right = checkLine(x, i + 1, 1, i)
            const up = checkLine(x, i - width, -width, i) 
            const down = checkLine(x, i + width, width, i)

            scenicScores.push(scenicScore[0])

            return left && right && up && down
        })

        const pt1 = candidates.filter(x => !x).length
        const pt2 = scenicScores.sortNumDesc()[0]

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
