import React from 'react'
import {useState} from 'react'



const ClickEvent = () => {
    const[number, setNumber]=useState(0)


    const increment=()=>{
        setNumber(number + 1)
    }
    const decrement=()=>{
        if(number>0){
        setNumber(number -1)
        }
    }
    const reset=()=>{
        setNumber(0)
    }
    
  return (
    <div>
        <h1>{number}</h1>
        <button onMouseOver={increment}>Increment</button>
        <button onMouseOver={decrement}>Decrement</button>
        <button onMouseOver={reset}>Reset</button>
    </div>
  )
}

export default ClickEvent
