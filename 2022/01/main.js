module.exports = {
    run: (helpers) => {
        const n = helpers.file.split('\n\n')
            .map(x => x.split('\n')
                .map(x => parseInt(x))
                .sum()
            ).sort((a, b) => b - a)

        const pt1 = n[0]
        const pt2 = n[0] + n[1] + n[2]
        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
