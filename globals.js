const file = (filename = './' + day + '/input.txt', charset = 'utf-8') => {
    return require('fs').readFileSync(filename, charset)
}

module.exports = { 
    // file: (day) => file(day),
    // fsn: (day) => file(day).split('\n')
    run: (day) => {
        return {
            file: file('./' + day + '/input.txt'),
            fsn: file('./' + day + '/input.txt').split('\n')
        }
    }
 }