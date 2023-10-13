function reverseString(str) {
    let string = []
    for (let i = str.length - 1;  i >= 0; i--) {
        string.push(str[i])
    }
    return string.join("")
}

console.log(reverseString('DOG'))

module.exports = reverseString;