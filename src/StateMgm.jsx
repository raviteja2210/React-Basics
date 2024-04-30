import React from 'react'
import {useState, useEffect} from 'react'

const StateMgm = () => {
  const[city, setCity]=useState("Hyderabad")
  useEffect(()=>{
    if(city == "Hyderabad"){
      setCity("Bangalore")
  }
  }, [city])
  return (
    <div>
        <h1> i'm in {city}</h1>
    </div>
  )
}

export default StateMgm
