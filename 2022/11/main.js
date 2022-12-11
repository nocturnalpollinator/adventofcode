module.exports = {
    run: (helpers) => {
        const n = helpers.file.split('\r\n\r\n')
       
        const monkiSetup = () => n.map(x => {
            const s = x.split('\r\n').map(x => x.split(': ').last)
            const op = s[2].split(' ').slice(-2)
            return {
                items: s[1].split(', ').arrToInt(),
                operation: op[0],
                operationWith: op[1],
                division: parseInt(s[3].split(' ').last),
                success: parseInt(s[4].split(' ').last),
                fail: parseInt(s[5].split(' ').last),
                inspections: 0
            }
        })

        const mul = (x, y) => x * (y == 'old' ? parseInt(x) : parseInt(y))
        const sum = (x, y) => x + (y == 'old' ? parseInt(x) : parseInt(y))
        const calcItem = (x, d) => Math.floor((x.operation == '*' ? 
            mul(x.items.shift() % supermod, x.operationWith) : 
            sum(x.items.shift() % supermod, x.operationWith)) / d)

         const monkeyRound = (x, _monki, relief = true) => {
            while(x.items.length > 0) {
                const item = calcItem(x, relief ? 3 : 1)
                x.inspections++
                _monki[item % x.division == 0 ? x.success : x.fail].items.push(item)
            }
        }

        // Round 1
        const monki = monkiSetup()
        const supermod = monki.reduce((acc, x) => acc * x.division, 1) 
        Array.from({length: 20}).map(_ => monki.map(x => monkeyRound(x, monki)))

        // Round 2
        const monki2 = monkiSetup()
        Array.from({length: 10000}).map(_ => monki2.map(x => monkeyRound(x, monki2, false)))

        const pt1 = monki.map(x => x.inspections).sortNumDesc().slice(0, 2).factor()
        const pt2 = monki2.map(x => x.inspections).sortNumDesc().slice(0, 2).factor()

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
