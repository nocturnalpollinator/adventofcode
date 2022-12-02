module.exports = {
    run: (glob) => {
        var n = glob.fsn.map(a => parseInt(a))
        var count = n.reduce((p, c, i) => [p[0] + (c > n[i-1]), i < 3 ? 0 : p[1] + (n[i] > n[i-3])], [0, 0])
        return { result: `Part I: ${count[0]}\nPart II: ${count[1]}` }
    }
}