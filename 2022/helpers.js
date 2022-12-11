const arrayExtensions = require('./arrayExtension')

const file = (filename = './' + day + '/input.txt', charset = 'utf-8') => {
    return require('fs').readFileSync(filename, charset)
}

module.exports = { 
    run: (day) => {
        return {
            calc: (_x, _y, operator, fallback = 0) => {
                const x = isNaN(parseInt(_x)) ? parseInt(fallback) : parseInt(_x)
                const y = isNaN(parseInt(_y)) ? parseInt(fallback) : parseInt(_y)
                switch (operator) {
                    case '+': return x + y
                    case '*': return x * y
                    case '/': return x / y
                    case '-': return x - y
                }
            },
            file: file('./' + day + '/input.txt'),
            fsn: file('./' + day + '/input.txt').split('\n')
        }
    }
}