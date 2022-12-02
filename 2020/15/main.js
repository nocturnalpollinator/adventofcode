const nextNum = (key, bookKey) => {  
    if (book[key] == undefined) {
        book[key] = [bookKey]
        return 0
    } 
    if (book[key].length == 2) {
        book[key].shift()
    }
    book[key].push(bookKey) 
    return book[key].reduce((a, b) => b - a)
}

const findNumber = (nums, position) => {
    book = []
    nums.map((item, i) => i < nums.length - 1 ? book['x' + item] = [parseInt(i) + 1] : false)
    result = [...Array(position - nums.length).fill(0), ...nums.reverse()]

    for (var i = result.length; i--;) { 
        if (i > position - nums.length - 1) continue;
        result[i] = nextNum('x' + result[i + 1], position - i - 1)
    }
    return result[0]
}

console.log('Part I: ' + findNumber([16,1,0,18,12,14,19], 2020))
console.log('Part II: ' + findNumber([16,1,0,18,12,14,19], 30000000))