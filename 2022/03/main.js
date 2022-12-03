module.exports = {
    run: (glob) => {
        /**
         * Tried to make it readable, but what's the point...
         */
        const n = glob.fsn
        const filterCharCode = (a) => getCharCode(a[0].filter(x => a[1].includes(x)))

        const getCharCode = a => a.filter((x, i) => x.indexOf(x) == i)
            .map((x, i) => x.toUpperCase() === x ? x.charCodeAt(i) - 38 : x.charCodeAt(i) - 96)

        const prio = n.map(x => 
                filterCharCode([x.slice(0, x.length / 2).split(''), x.slice(x.length/2).split('')])
                .reduce((a, b) => a + b)
            ).reduce((a, b) => a + b)

        const groups = n.map((x, i) => !(i % 3) ? n.slice(i, i + 3) : [])
            .filter(x => x.length > 0)

        const badge = groups.map(a => 
                getCharCode(a[0].split('')
                    .filter(x => a[1].includes(x) && a[2].includes(x))
                ).reduce((a, b) => a + b)
            ).reduce((a, b) => a + b)
    
        const pt1 = prio
        const pt2 = badge

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
