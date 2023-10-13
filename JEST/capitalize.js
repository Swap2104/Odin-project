function capitalize(str) {
    // let string =
    let string = str
    string = string.replace(str[0], str.charAt(0).toUpperCase())
    return string
}
// console.log(capitalize('and'))

module.exports = capitalize