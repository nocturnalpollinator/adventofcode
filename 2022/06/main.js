module.exports = {
    run: (helpers) => {
        const n = helpers.file.split('')
        const unique = (acc, x, i, length) => {
            if (Array.isArray(acc)) {
                if (acc.length == length) {
                    if (acc.uniq().length == length) {
                        return i
                    }
                    acc.shift()
                } 
                acc.push(x)
            }
            return acc
        }

        const pt1 = n.reduce((acc, x, i) => unique(acc, x, i, 4), [])
        const pt2 = n.reduce((acc, x, i) => unique(acc, x, i, 14), [])
        
        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
