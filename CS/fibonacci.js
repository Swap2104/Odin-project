// 8

function fibs(num) {
    let series = [0, 1]
    for (let i = 1; i < num - 1; i++) {
        series.push(series[i] + series[i - 1])
    }
    console.log(series)
}

function fibsrecur(num) {
    let arr=[]
    if (num < 2){
        return num
    }else{   
        return fibsrecur(num - 1) + fibsrecur(num - 2)
    }
}

fibs(8)
console.log(fibsrecur(400))