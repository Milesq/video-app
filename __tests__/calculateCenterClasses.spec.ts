import { calculateCenterClasses } from '../src/utils'

test('calculateCenterClasses returns correct values', () => {
  const expectedValues = [
    {
      input: { x: true, y: true },
      result: ['align-items-center', 'justify-content-center'],
    },
    {
      input: { x: true },
      result: ['justify-content-center'],
    },
    {
      input: { x: true, columns: true },
      result: ['flex-column', 'align-items-center'],
    },
  ]

  expectedValues.forEach(({ input, result }) => {
    const computedResult = calculateCenterClasses(input)

    expect(computedResult.sort()).toEqual(result.sort())
  })
})
