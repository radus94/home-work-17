const obj = require('./main')

describe('getDiscriminant', function () {
    test('Get Discriminant a:2, b:3, c:1', function () {
        expect(obj.getDiscriminant(2, 3, 1)).toEqual(1)
    })
    test('Get Discriminant a:3, b:3, c:1', function () {
        expect(obj.getDiscriminant(3, 3, 1)).toEqual(-3)
    })
    test('Get Discriminant a:4, b:4, c:1', function () {
        expect(obj.getDiscriminant(4, 4, 1)).toEqual(0)
    })
})
describe('getQuadratic', function () {
    test('Get getQuadratic delta:1, b:3, c:1', function () {
        expect(obj.getQuadratic(1, 2, 3)).toEqual('X1: -0.5; X2: -1')
    })
    test('Get getQuadratic delta:-3, b:3, c:1', function () {
        expect(obj.getQuadratic(-3, 2, 3)).toEqual('No data')
    })
    test('Get getQuadratic delta:0, b:3, c:1', function () {
        expect(obj.getQuadratic(0, 2, 3)).toEqual('X: -0.75')
    })
})