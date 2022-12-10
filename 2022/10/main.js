module.exports = {
    run: (helpers) => {
        const n = helpers.fsn
        const cycles = [1]
        const signal = [1]
        const signalCollection = []
        const rows = Array.from({length: 6}, _ => [])
        const currentRow = [0]
        const rowLength = 40

        const draw = () => {
            const signalHere = signal[0] <= cycles[0] % rowLength && signal[0] + 2 >= cycles[0] % rowLength
            rows[currentRow[0]][(cycles[0] % rowLength) - 1] = signalHere ? '#' : '.'
        } 

        const cycle = () => {
            draw()
            cycles[0]++
            rowCheck()
        }

        const rowCheck = () => currentRow[0] += cycles[0] % rowLength == 0 && cycles[0] !== rows.length * rowLength

        const signalCheck = () => cycles[0] % rowLength == 20 ? signalCollection.push(signal[0] * cycles[0]) : false

        n.map(x => {
            const c = x.split(' ')

            if (c[0].includes('noop')) {
                cycle()    
                signalCheck()
                return
            }
            Array.from({length: 2}).map((_, i) => {
                cycle()
                signal[0] += i ? parseInt(c[1]) : 0
                signalCheck()
            })
        })
        
        const pt1 = signalCollection.sum()
        const pt2 = `
${rows.map(x => x.join('')).join('\n')}
`

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
