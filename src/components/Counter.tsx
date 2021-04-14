import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as counter from '../store/counterSlice'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector(counter.selectCount)
  const [incrementAmount, setIncrementAmount] = useState('0')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div>
        <button onClick={() => dispatch(counter.decrement())}>-</button>
        <span data-testid="result">{count}</span>
        <button onClick={() => dispatch(counter.increment())}>+</button>
      </div>
      <div>
        <input
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(counter.incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}

export default Counter
