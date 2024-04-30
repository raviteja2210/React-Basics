
import React from 'react'
import { useState, useEffect } from 'react'

let UserDetails="https://jsonplaceholder.typicode.com/posts"
const Fetch = () => {
    const[user, setUser]=useState([])

    const UserHandler=async()=>{
        const response=await fetch(UserDetails)
        const newData=await response.json()
        setUser(newData)

    }
    useEffect(()=>{
        console.log(UserHandler())
    },[])

    return (
    <div>
        {user.map((item)=>{
            return(
                <div>
                    <h2>{item.id}</h2>
                    <h3>{item.title}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Fetch;
