import React from 'react'

import { increase, decrease } from './Action'

const Inc = ({count, increase, decrease}) => {
  return (
    <div>
      <h1>Count from INC : {count}</h1>
      <button onClick={()=>increase()}>increase</button>
      <button onClick={()=>decrease()}>decrease</button>

    </div>
  )
}

export default Inc;
