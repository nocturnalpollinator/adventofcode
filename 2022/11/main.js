module.exports = {
    run: (helpers) => {
        const n = helpers.file.split('\r\n\r\n')
        const monki = Array.from({length: 8}, _ => [])
        const monkiInspections = Array.from({length: 8}, _ => 0)
        let supermod = 1

        const mul = (x, y) => {
            const yy = y == 'old' ? parseInt(x) : parseInt(y)
            return x * yy
        }

        const sum = (x, y) => {
            const yy = y == 'old' ? parseInt(x) : parseInt(y)
            return x + yy
        }

        n.map(x => {
            const s = x.split('\r\n').map(x => x.split(': ').last)
            const divisible = parseInt(s[3].split(' ').last)
            supermod *= parseInt(divisible)
        })

        for (var ii = 0; ii < 10000; ii++) {

            n.map((x, i) => {
                const s = x.split('\r\n').map(x => x.split(': ').last)
                if (ii == 0) {
                    s[1].split(', ').arrToInt().map(x => monki[i].push(x))
                }
                const op = s[2].split(' ').slice(-2)
                const divisible = parseInt(s[3].split(' ').last)
                const success = parseInt(s[4].split(' ').last)
                const fail = parseInt(s[5].split(' ').last)

                while (monki[i].length > 0) {
                    const monkiItem = monki[i].shift() % supermod
                    // const newItem = Math.floor((op[0] == '*' ? mul(monkiItem, op[1]) : sum(monkiItem, op[1])) / 3)
                    const newItem = op[0] == '*' ? mul(monkiItem, op[1]) : sum(monkiItem, op[1])
                    monkiInspections[i]++
                    if (newItem % divisible == 0) {
                        monki[success].push(newItem)
                        continue
                    }
                    monki[fail].push(newItem )
                }
            })
        }
    
        console.log(monkiInspections.sortNumDesc().slice(0, 2).factor())

        const pt1 = 1
        const pt2 = 2

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
