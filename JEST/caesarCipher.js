function caesarCipher(str, key=3) {
    let enArr = []
    let ct=[]
    string = str
    for (let i = 0; i < string.length; i++) {
        enArr.push(parseInt(string.charCodeAt(i) + key))
        ct.push(String.fromCharCode(enArr[i]))
    }
    ct=ct.join('')
    return ct
}

module.exports=caesarCipher