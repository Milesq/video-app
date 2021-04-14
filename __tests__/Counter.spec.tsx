import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../src/store'
import Counter from '../src/components/Counter'

const app = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

describe('Counter', () => {
  it('inc/dec button', () => {
    const { getByText, getByTestId } = render(app())
    const resultWrapper = getByTestId('result')

    const getResult = () => parseInt(resultWrapper.innerHTML)
    const initialCount = getResult()

    const decBtn = getByText('-')
    const incBtn = getByText('+')

    fireEvent.click(incBtn)
    expect(getResult()).toBe(initialCount + 1)

    fireEvent.click(decBtn)
    expect(getResult()).toBe(initialCount)

    fireEvent.click(incBtn)
    fireEvent.click(incBtn)
    expect(getResult()).toBe(initialCount + 2)
  })
})
