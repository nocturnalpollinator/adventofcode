module.exports = {
    run: (helpers) => {
        const n = helpers.fsn

        const h = { x: 0, y: 0 }
        const t = Array.from({length: 9}, x => [{x: 0, y: 0}])

        const distance = (from, to) => [{ x: to.x - from.x, y: to.y - from.y }]

        const tpush = (ti, leading) => {
            const dist = distance(t[ti].last, leading).pop()
            const moveX = dist.x > 1 ? 1 : (dist.x == 0 || Math.abs(dist.x) == 1 ? 0 : -1);
            const moveY = dist.y > 1 ? 1 : (dist.y == 0 || Math.abs(dist.y) == 1 ? 0 : -1);

            t[ti].push({x: t[ti].last.x + moveX, y: t[ti].last.y + moveY})
        }

        n.map(x => {
            const c = x.split(' ')
            const d = c[0]
            Array.from({length: c[1]}).map(x => {
                switch (d) {
                    case 'R': h.x++
                        break
                    case 'L': h.x--
                        break
                    case 'U': h.y++
                        break
                    case 'D': h.y--
                        break
                }

                t.map((x, i) => tpush(i, i == 0 ? h : t[i-1].last))
            })
        })


        const pt1 = t[0].map(x => x.x + ',' + x.y).uniq().length
        const pt2 = t.last.map(x => x.x + ',' + x.y).uniq().length

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
