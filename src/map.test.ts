import map from './map'

describe('map', () => {
  it('returns object processed by specified transformer', () => {
    const src = {
      foo: 1,
      bar: 2,
    }
    expect(map(src, (key, value) => [key, 2 * value])).toEqual({
      foo: 2,
      bar: 4,
    })
  })

  it('returns object processed by specified transformer', () => {
    const src = {
      foo: 'abc',
      bar: 'def',
    }
    expect(map(src, (key, value) => [value, key])).toEqual({
      abc: 'foo',
      def: 'bar',
    })
  })
})
