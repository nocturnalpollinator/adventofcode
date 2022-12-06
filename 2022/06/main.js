module.exports = {
    run: (helpers) => {
        const n = helpers.file.split('')
        const unique = (acc, x, i, length, arr) => {
            if (acc.length == length && acc.uniq().length == length) {
                // Eject reduce early
                arr.splice(1)
                return i
            }

            if (acc.length == length) acc.shift()

            acc.push(x)
            return acc
        }

        const pt1 = n.slice(0).reduce((acc, x, i, arr) => unique(acc, x, i, 4, arr), [])
        const pt2 = n.slice(0).reduce((acc, x, i, arr) => unique(acc, x, i, 14, arr), [])
        
        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
