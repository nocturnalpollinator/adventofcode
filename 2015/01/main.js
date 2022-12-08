module.exports = {
    run: (helpers) => {
        const n = helpers.file.split('')

        const pt1 = n.reduce((acc, x) => acc += x == '(' ? 1 : -1, 0)
        const pt2 = n.reduce((acc, x, i) => {
            if (acc < 0) {
                n.splice(1)
                return i
            }
            return acc += x == '(' ? 1 : -1
        }, 0)

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
