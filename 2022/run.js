process.argv.slice(2).forEach((val) => {
    const helpers = require('./helpers')
    const day = require('./' + val + '/main')

    const startTime = Date.now()
    const result = day.run(helpers.run(val)).result
    const endTime = Date.now()
    console.log(`
DAY ${val}
------------
${result}

Execution time: ${endTime - startTime}ms
`
)
})