module.exports = {
    run: (helpers) => {
        const n = helpers.fsn.map(x => x.split(',').map(x => x.split('-').arrToInt()).map(x => Array.fromTo(x[0], x[1]))).filter(x => x)
        const pt1 = n.map(x => x.map(x => x.map(x => 'x' + x + 'x').join(''))).filter(x => x[0].includes(x[1]) || x[1].includes(x[0])).length
        const pt2 = n.filter(x => x[0].intersects(x[1])).length
        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
