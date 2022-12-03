Object.defineProperties(Array.prototype, {
    sum: {
        value: function(val = 0) {
            return this.reduce((a, b) => a + b, val)
        },
        configurable: true
    },
    last: {
        get: function() {
            return this[this.length - 1]
        },
        set: function(val) {
            this[this.length - 1] = val
        },
        configurable: true
    },
    sortNumAsc: {
        value: function sortNumAsc() {
            return this.sort((a, b) => a - b)
        },
        configurable: true
    },
    sortNumDesc: {
        value: function sortNumAsc() {
            return this.sort((a, b) => b - a)
        },
        configurable: true
    },
    uniq: {
        value: function uniq() {
            return this.filter((e, i) => this.indexOf(e) == i)
        },
        configurable: true
    },
})

const file = (filename = './' + day + '/input.txt', charset = 'utf-8') => {
    return require('fs').readFileSync(filename, charset)
}

module.exports = { 
    run: (day) => {
        return {
            file: file('./' + day + '/input.txt'),
            fsn: file('./' + day + '/input.txt').split('\n')
        }
    }
 }