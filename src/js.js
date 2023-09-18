
let text = 'ВМЕСТЕ'
export let n = ''
let m = 0
let j = setInterval(()=> {
    if(m < text.length){
        n += text[m]
        console.log(n)
        m += 1
    }else {
        clearInterval(j)
    }
}, 1000)