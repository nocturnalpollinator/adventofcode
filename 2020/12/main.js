const inst = require('fs').readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').map(item => [item.substr(0, 1), item.substr(1, item.length)])
function first() {

    north = 0
    east = 0
    dir = 0 // 0 east, 1 south, 2 west, 3 north

    for (i of inst) {

        if (i[0] == 'N' || (i[0] == 'F' && dir == 3)) {
            north += parseInt(i[1])
        }
        if (i[0] == 'S' || (i[0] == 'F' && dir == 1)) {
            north -= parseInt(i[1])
        }
        if (i[0] == 'E' || (i[0] == 'F' && dir == 0)) {
            east += parseInt(i[1])
        }
        if (i[0] == 'W' || (i[0] == 'F' && dir == 2)) {
            east -= parseInt(i[1])
        }
        if (i[0] == 'R') {
            dir = (dir + (parseInt(i[1]) / 90)) % 4
        }
        if (i[0] == 'L') {
            dir = (dir + ((360 - parseInt(i[1])) / 90)) % 4
        }
    }
    console.log(Math.abs(north) + Math.abs(east))
    
}
first()

function second() {
    north = 1
    east = 10
    posN = 0
    posE = 0
    dir = 0 // 0 east, 1 south, 2 west, 3 north

    for (i of inst) {

        if (i[0] == 'N') {
            north += parseInt(i[1])
        }
        if (i[0] == 'S') {
            north -= parseInt(i[1])
        }
        if (i[0] == 'E') {
            east += parseInt(i[1])
        }
        if (i[0] == 'W') {
            east -= parseInt(i[1])
        }
        
        if (i[0] == 'L') {
            tmpN = north
            tmpE = east
            if (parseInt(i[1]) == 90) {
                east = -tmpN
                north = tmpE
            }
            if (parseInt(i[1]) == 180) {
                north = -tmpN
                east = -tmpE
            }
            if (parseInt(i[1]) == 270) {
                east = tmpN
                north = -tmpE
            }
        }
        
        if (i[0] == 'R') {
            tmpN = north
            tmpE = east
            if (parseInt(i[1]) == 90) {
                east = tmpN
                north = -tmpE
            }
            if (parseInt(i[1]) == 180) {
                north = -tmpN
                east = -tmpE
            }
            if (parseInt(i[1]) == 270) {
                
                east = -tmpN
                north = tmpE
            }
        }

        if (i[0] == 'F') {
            posN += (north * i[1])
            posE += (east * i[1])
        }
        
    }
    console.log(Math.abs(posN) + Math.abs(posE))
}

second()