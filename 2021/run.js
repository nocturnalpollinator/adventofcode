// const options = process.argv.match(/\-\-/g)
// const options = process.argv.filter(arg => arg.match(/\-\-/g))
// console.log(options)

process.argv.slice(2).forEach((val) => {
    const glob = require('./globals')
    const day = require('./' + val + '/main')

    console.log(`
DAY ${val}
------------
${day.run(glob.run(val)).result}
`
)
})