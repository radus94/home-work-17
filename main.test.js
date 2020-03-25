const obj = require('./main')

describe('getDiscriminant', function () {
    test('Get Discriminant a:2, b:3, c:1', function () {
        expect(obj.getDiscriminant(2, 3, 1)).toEqual(1)
    })
})
