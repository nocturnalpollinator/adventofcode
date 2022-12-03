process.argv.slice(2).forEach((val) => {
    const helpers = require('./helpers')
    const day = require('./' + val + '/main')

    console.log(`
DAY ${val}
------------
${day.run(helpers.run(val)).result}
`
)
})