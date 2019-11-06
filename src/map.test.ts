import map from './map'

describe('map', () => {
  it('returns object mapped to src by mapper', () => {
    const src = {
      foo: 1,
      bar: 2,
    }
    expect(map(src, (key, value) => `${key}${value}`)).toEqual({
      foo: 'foo1',
      bar: 'bar2',
    })
  })

  it('returns object mapped to src by mapper uses only key', () => {
    const src = {
      foo: 1,
      bar: 2,
    }
    expect(map(src, key => key.length)).toEqual({
      foo: 3,
      bar: 3,
    })
  })
})
