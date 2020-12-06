const str1 = 'aaabbbccccdddeefff'
function dealStr (str) {
    let obj = {}
    for(let i = 0; i < str.length; i ++ ) {
        let v = str.charAt(i)
        if(obj[v] && obj[v].value === v) {
            ++obj[v].count
        } else {
            obj[v] = {
                count:1,
                value: v
            }
        }
    }
    return obj
}

const obj = dealStr(str1)
for(let key in obj){
    const x = obj[key]
    console.log(`${x.value}=${x.count}`)
}

console.log('44545')
