const bus = require('fs').readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')
const time = parseInt(bus[0])
busses = bus[1].split(',').filter(x => x != 'x').map(x => parseInt(x))
console.log(time, busses)

busses.map(item => {
    console.log(item + ': ' + (item - (time % item)))
})

extra = bus[1].split(',').map((item, i) => (
    item !== 'x' ? [parseInt(item), i] : false
)).filter(x => x !== false)

let t = 0
let mult = extra[0][0]

for (let i = 1; i < extra.length; i) {
    t += mult
    if ((t + extra[i][1]) % extra[i][0] == 0) {
        mult *= extra[i][0]
        i++
    }
}

