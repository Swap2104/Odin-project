const capitalize=require('./capitalize')

test('function capitalizes first character.', ()=>{
    expect(capitalize('and')).toBe('And')
})