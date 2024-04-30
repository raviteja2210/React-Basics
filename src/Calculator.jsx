
import React, {useState} from 'react'
import './App.css'

const Calculator = () => {
    const[input, setInput]=useState("")
    const[result, setResult]=useState(0)
    const handler=(event)=>{
        setInput(event.target.value)
    }
    const handleResutClick=()=>{
      setResult(eval(input))
      setInput('') //clearing the input field after getting the result
    }
  return (
    <div>
        <input type='text' value={input} name='input' onChange={handler} />
        <br/>
        <button onClick={handleResutClick}>Result</button>
        <h2> Result is : {result}</h2>

        <button onClick={()=> setInput(input + '1')}>1</button>
        <button onClick={()=> setInput(input + '2')}>2</button>
        <button onClick={()=> setInput(input + '3')}>3</button>
        <button onClick={()=> setInput(input + '4')}>4</button>
        <button onClick={()=> setInput(input + '5')}>5</button>
        <br/>
        <button onClick={()=> setInput(input + '6')}>6</button>
        <button onClick={()=> setInput(input + '7')}>7</button>
        <button onClick={()=> setInput(input + '8')}>8</button>
        <button onClick={()=> setInput(input + '9')}>9</button>
        <button onClick={()=> setInput(input + '0')}>0</button>
        <br/>
        <button onClick={()=> setInput(input + '+')}>+</button>
        <button onClick={()=> setInput(input + '-')}>-</button>
        <button onClick={()=> setInput(input + '*')}>*</button>
        <button onClick={()=> setInput(input + '/')}>/</button>
        <button onClick={()=> setInput('')}>Clear</button>

    </div>
  )
}

export default Calculator;