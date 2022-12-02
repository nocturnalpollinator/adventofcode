var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
})

rules = []
nearByTickets = []
yourTicket = false
nearBy = false
lineReader.on('line', line => {
    if (yourTicket) {
        myTicket = line.split(',')
        yourTicket = false
    } else if (nearBy) {
        nearByTickets.push(line.split(','))
    } else if (line != '') {
        spl = line.split(': ')
        if (spl.length > 1) {
            spl2 = spl[1].split(' or ')
            spl3 = spl2.map(item => item.split('-'))
            // rules[spl[0]] = spl3
            rules.push({
                id: spl[0],
                intervals: spl3
            })
        } 
        if (line.split(':')[0] == 'your ticket') {
            yourTicket = true
        } 
        if (line.split(':')[0] == 'nearby tickets') {
            nearBy = true
        }
    }
}).on('close', () => {
    simpleRules = rules.reduce((a, b) => {
        if (a instanceof Array) {
            c = b.intervals
            if (c[0][0] < a[0][0] && c[0][1] <= a[0][1]) {
                a[0][0] = c[0][0]
            }
            if (c[0][1] > a[0][1] && c[0][0] >= a[0][0]) {
                a[0][1] = c[0][1]
            }
            
            if (c[1][0] < a[1][0] && c[1][1] <= a[1][1]) {
                a[1][0] = c[1][0]
            }
            if (c[1][1] > a[1][1] && c[1][0] >= a[1][0]) {
                a[1][1] = c[1][1]
            }
            return a
        } else {
            return a.intervals
        }
    }).reduce((a, b) => {
        if (b[0] < a[1]) {
            a[1] = b[1]
            return a
        }
        return [a, b]
    })
    
    nearByTickets2 = JSON.parse(JSON.stringify(nearByTickets)); 
    count = 0
    invalidIndexes = []
    invalidTickets = nearByTickets.map((item, j) => {
        for (i in item) {
            if (parseInt(item[i]) >= simpleRules[0] && parseInt(item[i]) <= simpleRules[1]) {
                item[i] = true
            } else {
                count += parseInt(item[i])
                invalidIndexes.push(j)
            }
        }
        return item
    })

    validTickets = nearByTickets2.filter((x, i) => {
        return invalidIndexes.indexOf(i) == -1
    })
    // pos = []
    // ;
    possibilities = Array(rules.length).fill(rules.map((item) => item.id))
    // console.log(possibilities)
    // console.log(rules[0].id.toString())
    // console.log(possibilities[0].indexOf(rules[0].id.toString()))
    // console.log(validTickets[0][0])
    // for (p in possibilities) {
    wrongs = []
    for (row in validTickets) {
        for (col in validTickets[row]) {
            num = parseInt(validTickets[row][col])
            // console.log(num)
            for (rule in rules) {
                // console.log(rules[rule].id)
                // console.log(num)
                if (!((num >= rules[rule].intervals[0][0] && num <= rules[rule].intervals[0][1])
                    || (num >= rules[rule].intervals[1][0] && num <= rules[rule].intervals[1][1]))) {
                        // possibilities[col][possibilities[col].indexOf(rules[rule].id)] = false
                        // console.log(row, col, num, rules[rule])
                        if (wrongs[col] == undefined) {
                            wrongs[col] = [rules[rule].id]
                        } else {
                            wrongs[col].push(rules[rule].id)
                        }
                }
            }
        }
    }
    // console.log(wrongs)
    // for (row in possibilities) {
    //     for (col in possibilities) {
    //         for (c in wrongs[row]) {
    //             if (wrongs[row][c].indexOf(possibilities[row]) !== -1) {
    //                 possibilities[row][col] = false
    //             }
    //         }
    //     }
    // }
    possibilities = possibilities.map((item, index) => {
        console.log(wrongs[index])
        // return item.filter(i => {
        //     // console.log(i)
        //     return wrongs[index].indexOf(i) === -1
        // })
    })

    console.log(possibilities)

    
    // }

    // for (var i = 0; i < validTickets[0].length; i++) {
    //     for (var j = 0; j < validTickets.length; j++) {
    //         if (possibilities[i][possibilities[i].indexOf(rules[i].id)] !== false) {
    //             console.log(rules[i].intervals[0][0])
    //             console.log(validTickets[j][i])
    //             // if (((parseInt(validTickets[j][i]) < rules[i].intervals[0][0] || parseInt(validTickets[j][i]) > rules[i].intervals[0][1]) || (parseInt(validTickets[j][i]) < rules[i].intervals[1][0] && parseInt(validTickets[j][i]) > rules[i].intervals[1][1]))) {
    //                 // possibilities[i][i] = false
                    
    //                 // possibilities[i][possibilities[i].indexOf(rules[i].id)] = false
    //             // }
    //         }
    //     }       
    // }
    // console.log(possibilities)
    // for (v in validTickets) {

        // validTickets[v].map((item, i) => {
        //     if (possibilities[i][possibilities[i].indexOf(rules[i].id)] !== false) {

        //         // console.log(possibilities.indexOf(rules[i].id))
        //         if (!((parseInt(item) >= rules[i].intervals[0][0] && parseInt(item) <= rules[i].intervals[0][1]) || (parseInt(item) >= rules[i].intervals[1][0] && parseInt(item) <= rules[i].intervals[1][1]))) {
        //             // possibilities[i][i] = false
                    
        //             possibilities[i][possibilities[i].indexOf(rules[i].id)] = false
        //         }
        //     }
        // })
    // }
    // console.log(possibilities)
})