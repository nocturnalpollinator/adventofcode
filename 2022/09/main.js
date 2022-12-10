module.exports = {
    run: (helpers) => {
        const n = helpers.fsn

        const h = {
            x: 0,
            y: 0
        }
        const t = [
            [{x: 0, y:0}],
            [{x: 0, y:0}],
            [{x: 0, y:0}],
            [{x: 0, y:0}],
            [{x: 0, y:0}],
            [{x: 0, y:0}],
            [{x: 0, y:0}],
            [{x: 0, y:0}],
            [{x: 0, y:0}]
        ]

        const distance = (from, to) => [{ x: to.x - from.x, y: to.y - from.y }]

        const tpush = (ti, leading) => {
            const dist = distance(t[ti].last, leading).pop()

            // ^^>>
            if (dist.x == 2 && dist.y == 2) {
                t[ti].push({x: t[ti].last.x + 1, y: t[ti].last.y + 1})
                return
            }
            // ^^<<
            if (dist.x == -2 && dist.y == 2) {
                t[ti].push({x: t[ti].last.x - 1, y: t[ti].last.y + 1})
                return
            }
            // >>..
            if (dist.x == 2 && dist.y == -2) {
                t[ti].push({x: t[ti].last.x + 1, y: t[ti].last.y - 1})
                return
            }
            // <<..
            if (dist.x == -2 && dist.y == -2) {
                t[ti].push({x: t[ti].last.x - 1, y: t[ti].last.y - 1})
                return
            }
            // >
            if (dist.x == 2 && dist.y == 0) {
                t[ti].push({x: t[ti].last.x + 1, y: t[ti].last.y})
                return
            }

            // <
            if (dist.x == -2 && dist.y == 0) {
                t[ti].push({x: t[ti].last.x - 1, y: t[ti].last.y})
                return
            }

            // ^ 
            if (dist.x == 0 && dist.y == 2) {
                t[ti].push({x: t[ti].last.x, y: t[ti].last.y + 1})
                return
            }

            // .
            if (dist.x == 0 && dist.y == -2) {
                t[ti].push({x: t[ti].last.x, y: t[ti].last.y - 1})
                return
            }

            // >^^
            if (dist.x == 1 && dist.y == 2) {
                t[ti].push({x: t[ti].last.x + 1, y: t[ti].last.y + 1})
                return
            }

            // ^^<
            if (dist.x == -1 && dist.y == 2) {
                t[ti].push({x: t[ti].last.x - 1, y: t[ti].last.y + 1})
                return
            }

            // >>^
            if (dist.x == 2 && dist.y == 1) {
                t[ti].push({x: t[ti].last.x + 1, y: t[ti].last.y + 1})
                return
            }

            // ^<<
            if (dist.x == -2 && dist.y == 1) {
                t[ti].push({x: t[ti].last.x - 1, y: t[ti].last.y + 1})
                return
            }

            // >..
            if (dist.x == 1 && dist.y == -2) {
                t[ti].push({x: t[ti].last.x + 1, y: t[ti].last.y - 1})
                return
            } 
            
            // <..
            if (dist.x == -1 && dist.y == -2) {
                t[ti].push({x: t[ti].last.x - 1, y: t[ti].last.y - 1})
                return
            } 

            // >>.
            if (dist.x == 2 && dist.y == -1) {
                t[ti].push({x: t[ti].last.x + 1, y: t[ti].last.y - 1})
                return
            }

            // <<.
            if (dist.x == -2 && dist.y == -1) {
                t[ti].push({x: t[ti].last.x - 1, y: t[ti].last.y - 1})
                return
            }
            
            t[ti].push({x: t[ti].last.x, y: t[ti].last.y})
        }

        n.map(x => {
            const c = x.split(' ')
            const d = c[0]
            const l = c[1]

            for (var i = 0; i < l; i++) {

                switch (d) {
                    case 'R': 
                        h.x++
                        break
                    case 'L': 
                        h.x--
                        break
                    case 'U': 
                        h.y++
                        break
                    case 'D': 
                        h.y--
                        break

                }

                t.forEach((x, i) => {
                    if (i == 0) {
                        tpush(0, h)
                        return
                    }
                    tpush(i, t[i-1].last)
                })

            }
        })


        const pt1 = t[0].map(x => x.x + ',' + x.y).uniq().length
        const pt2 = t.last.map(x => x.x + ',' + x.y).uniq().length

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
