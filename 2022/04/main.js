module.exports = {
    run: (helpers) => {
        const n = helpers.fsn

        const a = n.map(x => {
            const q = x.split(',')
            const w = [q[0].split('-').arrToInt(), q[1].split('-').arrToInt()]
            return w.map(x => Array.fromTo(x[0], x[1]))
        }).filter(x => x)

        const pt1 = a.map(x => x.map(x => x.map(x => 'x' + x + 'x').join(''))).filter(x => x[0].includes(x[1]) || x[1].includes(x[0])).length
        const pt2 = a.filter(x => x[0].intersects(x[1])).length

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
