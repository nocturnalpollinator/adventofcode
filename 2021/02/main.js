module.exports = {
    run: (glob) => {
        var count = glob.fsn.reduce((p, c) => {
            var x = c.split(' ').map((s, i) => i > 0 ? parseInt(s) : s[0])
            return [
                x[0] == 'f' ? p[0] += x[1] : p[0], // Horizontal
                x[0] == 'd' ? p[1] += x[1] : x[0] == 'u' ? p[1] -= x[1] : p[1], // Depth
                x[0] == 'f' ? p[2] += x[1] * p[1] : p[2] // Aim
            ]
        }, [0, 0, 0])
        return { result: `Part I: ${count[0] * count[1]}\nPart II: ${count[0] * count[2]}` }
    }
}