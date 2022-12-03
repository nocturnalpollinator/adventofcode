module.exports = {
    run: (helpers) => {
        const n = helpers.fsn
        const strat = {
            // Rock
            A: {
                X: 4,
                Y: 8,
                Z: 3
            },
            // Paper
            B: {
                X: 1,
                Y: 5,
                Z: 9
            },
            // Scissors
            C: {
                X: 7,
                Y: 2,
                Z: 6
            }
        }

        const count = n.reduce((acc, c) => c.length > 0 ? acc + strat[c[0]][c[2]] : acc, 0)

        const count2 = n.reduce((acc, c) => c.length > 0 ?
            c[2] == 'X' ? acc + Object.values(strat[c[0]]).filter(x => x < 4).pop() :
            c[2] == 'Y' ? acc + Object.values(strat[c[0]]).filter(x => x > 3 && x < 7).pop() :
            acc + Object.values(strat[c[0]]).filter(x => x > 6).pop()
        : acc, 0)

        const pt1 = count
        const pt2 = count2

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
