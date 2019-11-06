import filter from './filter'

describe('filter', () => {
  it('returns filtered object', () => {
    const src = {
      foo: 1,
      bar: 2,
    }
    expect(filter(src, (key, value) => key.length % 2 === value)).toEqual({
      foo: 1,
    })
  })

  it('returns filtered object by filterer uses only key', () => {
    const src = {
      foo: 1,
      bar: 2,
    }
    expect(filter(src, key => key === 'bar')).toEqual({
      bar: 2,
    })
  })
})
