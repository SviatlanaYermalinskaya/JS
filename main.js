let myRandom = (a, b) => {
    return Math.round(Math.random() * (b - a) + a)
}
let randomSign = () => {
    let s = myRandom(0, 1)
     if (s === 0) {
         s = -1
     }
     return s    
}

let counterX = 0
let counterY = 0
let minX = 0
let minY = 0
let maxX = 1200
let maxY = 900
let deltaX = 0
let deltaY = 0
let signX = 1
let signY = 1

let interval = setInterval(()=> {
    if (deltaX === 0 && deltaY === 0) {
        deltaX = myRandom(100, 400)
        deltaY = myRandom(100, 400)
        signX = randomSign()
        signY = randomSign()
    }
    if (counterX === minX) {
        signX = 1
    }
    if (counterX === maxX) {
        signX = -1
    }
    if (counterY === minY) {
        signY = 1
    }
    if (counterY === maxY) {
        signY = -1
    }
    if (deltaX === 0) {
        signX = 0
    }
    else {
        deltaX--
    }        
    if (deltaY === 0) {
        signY = 0
    }
    else {
        deltaY--
    }
    
    counterX += signX
    counterY += signY
    
    ball.style.left = counterX+"px"
    ball.style.top = counterY+"px"
    
}, 5)

ball.onclick = () => {
    alert('Congratulations! You have won!!!')
    field1.style.visibility = 'hidden'
    clearInterval(interval)
    let curR = myRandom(0, 255)
    let curG = myRandom(0, 255)
    let curB = myRandom(0, 255)
    document.body.style.background = `rgb(${curR}, ${curG}, ${curB})`
    console.log("FIRST COLOR")
            console.log(curR)
            console.log(curG)
            console.log(curB)
    let nextR = myRandom(0, 255)
    let nextG = myRandom(0, 255)
    let nextB = myRandom(0, 255)
    setInterval(()=> {
        if (curR === nextR && curG === nextG && curB === nextB) {
            nextR = myRandom(0, 255)
            nextG = myRandom(0, 255)
            nextB = myRandom(0, 255)
            console.log("NEW COLOR")
            console.log(nextR)
            console.log(nextG)
            console.log(nextB)
        }
        if (curR < nextR) {
            curR++
        }
        if (curR > nextR) {
            curR--
        }
        if (curG < nextG) {
            curG++
        }
        if (curG > nextG) {
            curG--
        }
        if (curB < nextB) {
            curB++
        }
        if (curB > nextB) {
            curB--
        }
        document.body.style.background = `rgb(${curR}, ${curG}, ${curB})`
    }, 10)

}
btn1.onclick = () => {
    btn1.disabled = true
    clearInterval(interval)
}
