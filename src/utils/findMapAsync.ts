async function findMapAsync<T, V>(
  array: T[],
  predicate: (el: T, i?: number) => Promise<V>
): Promise<V | null> {
  for (const i in array) {
    const el = array[i]

    const value = await predicate(el, Number(i))

    if (value) {
      return value
    }
  }

  return null
}

export default findMapAsync
