console.log('test')

export const plus = (a: number, b: number) => {
  return a + b
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test plus', () => {
    expect(plus(1, 1)).toBe(2)
  })
}

export const plus1 = (a: number) => {
  console.log('plus1 a1', a)
  return a + 1
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test plus1', () => {
    expect(plus1(1)).toBe(2)
  })
}
