module.exports = {
    run: (helpers) => {
        const n = helpers.file.split('\n\n')
            .map(x => x.split('\n')
                .arrToInt()
                .sum()
            ).sortNumDesc()

        const pt1 = n[0]
        const pt2 = n[0] + n[1] + n[2]
        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
