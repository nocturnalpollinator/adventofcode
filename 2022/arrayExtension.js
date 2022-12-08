Object.defineProperties(Array.prototype, {
    sum: {
        value: function(val = 0) {
            return this.reduce((a, b) => a + b, val)
        },
        configurable: true
    },
    factor: {
        value: function(val = 1) {
            return this.reduce((a, b) => a * b, val)
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
    intersects: {
        value: function(target) {
            return target.includes(this[0]) || target.includes(this.last) || this.includes(target[0]) || this.includes(target.last)
        }
    },
    arrToInt: {
        value: function() {
            return this.map(x => parseInt(x))
        }
    },
    setSingle: {
        value: function(x) {
            this.pop()
            this.push(x)
        }
    }
})

Object.defineProperties(Array, {
    fromTo: {
        value: function(from, to) {
            return this.from({ length: to - from + 1 }, (e, i) => i + from)
        },
        configurable: true
    }
})