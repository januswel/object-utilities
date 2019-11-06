import reduce from './reduce'

describe('map', () => {
  it('returns reduced one with a reducer uses key and value', () => {
    const src = {
      foo: 1,
      bar: 2,
    }
    expect(
      reduce(
        src,
        (result, key, value) => {
          result.push(`${key}${value}`)
          return result
        },
        [],
      ).sort(),
    ).toEqual(['bar2', 'foo1'])

    expect(
      reduce(
        src,
        (result, key, value) => {
          result[value.toString()] = key
          return result
        },
        {},
      ),
    ).toEqual({
      1: 'foo',
      2: 'bar',
    })
  })

  it('returns reduced one with a reducer uses only key', () => {
    const src = {
      foo: 1,
      bar: 2,
    }
    expect(
      reduce(
        src,
        (result, key) => {
          result.push(key)
          return result
        },
        [],
      ).sort(),
    ).toEqual(['bar', 'foo'])
  })
})
