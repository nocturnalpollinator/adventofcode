module.exports = {
    run: (helpers) => {
        const n = helpers.fsn
        
        const pt1 = n.reduce((acc, x) => {
            const a = x.split('x').arrToInt()
            const b = [(2*a[0]*a[1]), (2*a[1]*a[2]), (2*a[2]*a[0])].sortNumAsc()
            return b.sum() + (b[0] / 2) + acc
        }, 0)
        const pt2 = n.reduce((acc, x) => {
            const a = x.split('x').arrToInt().sortNumAsc()
            return a[0] + a[0] + a[1] + a[1] + a.factor() + acc
        }, 0)

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
