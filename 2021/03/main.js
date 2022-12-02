module.exports = {
    run: (glob) => {
        var count = glob.fsn.reduce((p, c) => {
            var x = c.split('').map((s) => parseInt(s))
            return [
                x[0] == 1 ? p[0]+= 1 : p[0]-= 1,
                x[1] == 1 ? p[1]+=1 : p[1]-=1,
                x[2] == 1 ? p[2]+=1 : p[2]-=1,
                x[3] == 1 ? p[3]+=1 : p[3]-=1,
                x[4] == 1 ? p[4]+=1 : p[4]-=1,
                x[5] == 1 ? p[5]+=1 : p[5]-=1,
                x[6] == 1 ? p[6]+=1 : p[6]-=1,
                x[7] == 1 ? p[7]+=1 : p[7]-=1,
                x[8] == 1 ? p[8]+=1 : p[8]-=1,
                x[9] == 1 ? p[9]+=1 : p[9]-=1,
                x[10] == 1 ? p[10]+=1 : p[10]-=1,
                x[11] == 1 ? p[11]+=1 : p[11]-=1
            ]
        }, [0,0,0,0,0,0,0,0,0,0,0,0])
        var a = parseInt(count.map(a => parseInt(a) > 0 ? 1 : 0).join(''), 2)
        var b = parseInt(count.map(a => parseInt(a) < 0 ? 1 : 0).join(''), 2)
        var current = count.map(a => parseInt(a) > 0 ? 1 : 0)[0]
        var current2 = count.map(a => parseInt(a) < 0 ? 1 : 0)[0]

        function common(current, mode = 0) {
            var pos = 0;
            var list = glob.fsn
            while(list.length > 1) {
                list = list.filter((x) => x[pos] == current)
                pos++;
                current = list.reduce((p, c) => {
                    var x = c.split('').map((s) => parseInt(s))
                    return x[pos] == 1 ? p += 1 : p -= 1
                }, 0)
                
                current = mode == 0 ? (parseInt(current) >= 0 ? 1 : 0) : parseInt(current) < 0 ? 1 : 0 
            }
            
            return list
        }

        var baba = parseInt(common(current), 2);
        var bobo = parseInt(common(current2, 1), 2);

        return { result: `Part I: ${a * b} \nPart II: ${baba * bobo}` }
    }
}