import { plus1 } from '@js-sdk-starter/core'

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(plus1(counter)))
  setCounter(0)
}
