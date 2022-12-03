module.exports = {
    run: (helpers) => {
        /**
         * Tried to make it readable, but what's the point...
         */
        const n = helpers.fsn
        const filterCharCode = a => getCharCode(a[0].filter(x => a[1].includes(x)))

        const getCharCode = a => a.filter((x, i) => x.indexOf(x) == i)
            .map((x, i) => x.toUpperCase() === x ? x.charCodeAt(i) - 38 : x.charCodeAt(i) - 96)

        const prio = n.map(x => 
                filterCharCode([x.slice(0, x.length / 2).split(''), x.slice(x.length / 2).split('')])
                .sum()
            ).sum()

        const groups = n.map((x, i) => !(i % 3) ? n.slice(i, i + 3) : false)
            .filter(x => !!x)

        const badge = groups.map(a => 
                getCharCode(a[0].split('')
                    .filter(x => a[1].includes(x) && a[2].includes(x))
                ).sum()
            ).sum()
    
        const pt1 = prio
        const pt2 = badge

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
