module.exports = {
    run: (helpers) => {
        const n = helpers.file.split('$ ').map(x => x.split('\n').filter(x => x !== ''))
        n.shift()

        const tree = {'/': { 
            parent: false,
            size: 0
        }}

        const pwd = ['/']

        const changePwd = (path) => {
            pwd.pop()
            pwd.push(path)
        }

        const addToParent = (parent, num) => {
            if (!parent) return
            tree[parent].size += parseInt(num)
            addToParent(tree[parent].parent, num)
        }

        n.map((x, i) => {
            const c = x[0].split(' ')

            if (c[0] == 'cd') {
                if (c[1] == '/') {
                    changePwd('/')
                    return
                }
                if (c[1] == '..') {
                    changePwd(tree[pwd[0]].parent)
                    return
                }
                if (tree[c[1]] !== undefined && tree[c[1]].parent !== pwd[0]) {
                    tree[c[1] + i] = {
                        size: 0,
                        parent: pwd[0]
                    } 
                    changePwd(c[1] + i)
                    return
                }

                tree[c[1]] = {
                    size: 0,
                    parent: pwd[0]
                }
                changePwd(c[1])
            }

            if (c[0] == 'ls') {
                x.map(x => {
                    const a = x.split(' ')
                    if (!isNaN(a[0])) {
                        tree[pwd[0]].size += parseInt(a[0])
                        addToParent(tree[pwd[0]].parent, a[0])
                    }
                })
            }
        })

        const sizes = []
        const space = 70000000 - tree['/'].size
        const save = []
        for (const [key, value] of Object.entries(tree)) {
            if (value.size <= 100000)
                sizes.push(value.size)
            if (space + value.size >= 30000000)
                save.push(value.size)
        }

        const pt1 = sizes.sum()
        const pt2 = save.sortNumAsc()[0]

        return { result: `Part I: ${pt1}\nPart II: ${pt2}` }
    }
}
