import React, { useContext } from 'react'
import MyContext from './MyContext'

const MyComponent = () => {

    const contextValue=useContext(MyContext)
  return (
    <div>
        <h2>My Component</h2>
        <p> Context Value : {contextValue}</p>
    </div>
  )
}

export default MyComponent
