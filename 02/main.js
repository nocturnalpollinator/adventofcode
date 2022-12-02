module.exports = {
    run: (glob) => {
        const n = glob.fsn
        const strat = {
            // Rock
            A: {
                X: 4,
                Y: 8,
                Z: 3,
                win: 'Y',
                draw: 'X',
                lose: 'Z'
            },
            // Paper
            B: {
                X: 1,
                Y: 5,
                Z: 9,
                win: 'Z',
                draw: 'Y',
                lose: 'X'
            },
            // S
            C: {
                X: 7,
                Y: 2,
                Z: 6,
                win: 'X',
                draw: 'Z',
                lose: 'Y'
            }
        }

        var count = 0;
        var count2 = 0;

        n.forEach((element, i) => {
            if (element !== '') {
                x = element.split(' ') 
                count += strat[x[0]][x[1]]
                if (x[1] == 'X') {
                    // lost
                    count2 += parseInt(strat[x[0]][strat[x[0]].lose])
                }
                if (x[1] == 'Y') {
                    // draw
                    count2 += parseInt(strat[x[0]][strat[x[0]].draw])
                }
                if (x[1] == 'Z') {
                    // win
                    count2 += parseInt(strat[x[0]][strat[x[0]].win])
                }
            }
        });


        const pt1 = count
        const pt2 = count2

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
