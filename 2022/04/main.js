const { text } = require("stream/consumers")

module.exports = {
    run: (helpers) => {
        const n = helpers.fsn

        const test = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.split('\n')

        const p = []
        const a = n.map(x => {
            const q = x.split(',')
            const w = [q[0].split('-').map(x => parseInt(x)), q[1].split('-').map(x => parseInt(x))]
            const e = w.map(x => {
                const string = []
                for (var i = x[0]; i < x[1] + 1; i++) {
                    string.push(i)
                }
                return string
            })
            const join = e.map(x => x.map(x => 'x' + x + 'x').join(''))
            p.push(e)
            return join[0].includes(join[1]) || join[1].includes([join[0]])
        }).filter(x => x)
       

        const pt1 = a.length
         const pt2 = p.filter(x => {
            for(var i = x[0][0]; i < x[0].last + 1; i++) {
                    if (x[1].includes(i)) return true
            }
            return false 
        }).length

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
