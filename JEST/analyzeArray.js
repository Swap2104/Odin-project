function analyzeArray(array = []) {
    // function Analyze(average, min, max, length) {
    //     this.average,
    //         this.min,
    //         this.max,
    //         this.average
    // }
    let min = Math.min(...array)
    let max = Math.max(...array)
    let sum = 0
    array.forEach(e => sum += e)
    let average = sum / array.length
    let length = array.length

    // let arrObj = New Analyze(average, min, max, length)

    return { average, min, max, length }
}

console.log(analyzeArray([1, 2, 3, 4, 5]))

module.exports = analyzeArray