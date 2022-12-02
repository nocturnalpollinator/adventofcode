module.exports = {
    run: (glob) => {
        var straights = glob.fsn.map(x => x.split(' -> ').map(x => x.split(',')))
                                .filter(x => x[0][0] == x[1][0] || x[0][1] == x[1][1])
        var gridWidth = 100
        var grid = Array(gridWidth * gridWidth).fill(0)

        straights.forEach(x => {
            if (x[0][0] == x[1][0]) {
                // vertical
                for (i = x[0][1]; i < x[1][1]; i++) {
                    grid[x[0]]
                }
            } else {
                // horizontal
                // for (i = x[0][0]; i < x[1][0]; i++) {
                //     grid[x[1]]++
                // }
            }

        })





        return { result: `Part I:  \nPart II: ` }
    }
}