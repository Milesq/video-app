import findAsync from '../src/utils/findAsync'

describe('findAsync', () => {
  it('returns right element', () => {
    const array = [1, 2, 3]
    const asyncIs = a => b => Promise.resolve(a === b)

    expect(findAsync(array, asyncIs(3))).resolves.toBe(3)
    expect(findAsync(array, asyncIs(1))).resolves.toBe(1)
  })

  it('returns right element by index', () => {
    const array = [1, 2, 3]
    const getIndexAsync = wantedI => (_, i) => Promise.resolve(i === wantedI)

    expect(findAsync(array, getIndexAsync(2))).resolves.toBe(3)
    expect(findAsync(array, getIndexAsync(1))).resolves.toBe(3)
  })

  it('returns null when doesnt find', () => {
    const array = [1, 2, 3]
    const asyncFalse = () => Promise.resolve(false)

    expect(findAsync(array, asyncFalse)).resolves.toBe(null)
  })
})
