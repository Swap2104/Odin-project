function sumRE(num) {
    if (num == 1) {
        return 1
    } else {
        return num + sumRE(num-1)
    }
}

console.log(sumRE(5));
console.log(fact(5));

function fact(num){
    if (num==1) {
        return 1
    }
    return num* fact(num-1)
}