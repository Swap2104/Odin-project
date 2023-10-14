import Ship from "../Ship";
let battleship = new Ship(5)

test('Hit method test', () => {
    expect(battleship.Hit()).toBe(1)
})

test('Hit method sink test', () => {
    expect(battleship.Hit()).toBe(2)
})

test('isSunk method test', () => {
    expect(battleship.Sunk()).toBe(true)
})