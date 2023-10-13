const caesarCipher =require('./caesarCipher')

test('caesarCipher Test with key 2', () => {
    expect(caesarCipher("swapnil", 2)).toBe("uycrpkn")
})
test('caesarCipher Test without key argument', () => {
    expect(caesarCipher("Gnome")).toBe("Jqrph")
})
test('caesarCipher Test with key 7', () => {
    expect(caesarCipher("Fedora", 7)).toBe("Mlkvyh")
})
test('caesarCipher Test with special characters', () => {
    expect(caesarCipher(`#@:>?<_+=-`, 7)).toBe("*GAEFCf2D4")
})
test('caesarCipher Test with special characters for negative key', () => {
    expect(caesarCipher(`_@:>?<_+=-`, -7)).toBe("X93785X$6&")
})