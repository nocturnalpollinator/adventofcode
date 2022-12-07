module.exports = {
    run: (helpers) => {
        const n = helpers.file.split('\n\n')
        const crates1 = Array.from({length: 9}, (e, i) => [])
        const crates2 = Array.from({length: 9}, (e, i) => [])
        var it = 0

        for (var i = 1; i < n[0].length; i += 4) {
            if (n[0][i] !== '' && isNaN(n[0][i])) {
                crates1[it].push(n[0][i])
                crates2[it].push(n[0][i])
            } 
            it = it == 8 ? 0 : it + 1
        }

        const movements = n[1].split('\n').map(x => {
            const s = x.split(' ')
            return [s[1], s[3], s[5]]
        })

        for (var i = 0; i < movements.length; i++) {
            var c = crates2[movements[i][1] - 1].slice(0, movements[i][0]).reverse()
            for (var j = 0; j < c.length; j++) {
                crates2[movements[i][2] - 1].unshift(c[j])
                crates2[movements[i][1] - 1].shift()
            }
            for (var j = 0; j < movements[i][0]; j++) {
                crates1[movements[i][2] - 1].unshift(crates1[movements[i][1] - 1].shift())
            }
        }

        const pt1 = crates1.map(x => x[0]).join('')
        const pt2 = crates2.map(x => x[0]).join('')

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
