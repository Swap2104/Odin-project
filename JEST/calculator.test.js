const calculator = require('./calculator')

test('Test Add function', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test('Test Subtract function', () => {
    expect(calculator.sub(6, 2)).toBe(4)
})

test('Test Multiply function', () => {
    expect(calculator.multiply(5, 2)).toBe(10)
})

test('Test Divide function', () => {
    expect(calculator.divide(10, 2)).toBe(5)
})