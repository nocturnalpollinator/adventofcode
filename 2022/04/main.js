module.exports = {
    run: (helpers) => {
        const n = helpers.fsn

        const a = n.map(x => {
            const q = x.split(',')
            const w = [q[0].split('-').map(x => parseInt(x)), q[1].split('-').map(x => parseInt(x))]
            return w.map(x => Array.from({ length: x[1] - x[0] + 1 }, (e, i) => i + x[0]))
        }).filter(x => x)

        const pt1 = a.map(x => x.map(x => x.map(x => 'x' + x + 'x').join(''))).filter(x => x[0].includes(x[1]) || x[1].includes(x[0])).length
        const pt2 = a.filter(x => x[1].includes(x[0][0]) || x[1].includes(x[0].last) || x[0].includes(x[1][0]) || x[0].includes(x[1].last)).length

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
