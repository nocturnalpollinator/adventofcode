module.exports = {
    run: (glob) => {
        const n = glob.file.replace(/(?:\r\n|\r|\n)/g, ',').split(',,')
            .map(x => x.split(',')
                .map(x => parseInt(x))
                .reduce((a, b) => a + b)
            ).sort((a, b) => b - a)

        const pt1 = n[0]
        const pt2 = n[0] + n[1] + n[2]
        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
