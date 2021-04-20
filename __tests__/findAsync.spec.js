import findMapAsync from '../src/utils/findMapAsync'

describe('findAsync', () => {
  it('returns right element', () => {
    const array = [1, 2, 3]
    const asyncIs = a => b => Promise.resolve(a === b ? b : false)

    expect(findMapAsync(array, asyncIs(3))).resolves.toBe(3)
    expect(findMapAsync(array, asyncIs(1))).resolves.toBe(1)
  })

  it('returns right element by index', () => {
    const array = [1, 2, 3]
    const getIndexAsync = wantedI => (el, i) =>
      Promise.resolve(i === wantedI && el)

    expect(findMapAsync(array, getIndexAsync(2))).resolves.toBe(3)
    expect(findMapAsync(array, getIndexAsync(1))).resolves.toBe(2)
  })

  it('returns null when doesnt find', () => {
    const array = [1, 2, 3]
    const asyncFalse = () => Promise.resolve(false)

    expect(findMapAsync(array, asyncFalse)).resolves.toBe(null)
  })
})
