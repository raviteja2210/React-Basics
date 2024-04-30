

import React, { useState } from 'react'

const Post = () => {
    const[name, setName]=useState("")
    const[role, setRole]=useState("")
    const[email, setEmail]=useState("")
    const[number, setNumber]=useState("")


    const empDetails={name, role, email, number}

    const UserDetails=(e)=>{
        e.preventDefault()
    console.log(empDetails)
    }

  return (
    <div className='empForm'>
        <div className='Section'>
            <form onSubmit={UserDetails}>
                <label>User Name</label>
                <input type='text' name='name' onChange={(e)=>setName(e.target.value)}/><br/>
                <br/>
                <label>User role</label>
                <input type='text' name='role' onChange={(e)=>setRole(e.target.value)}/>
                <br/>
                <br/>
                <label>User Email</label>
                <input type='email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <br/>
                <label>User Number</label>
                <input type='number' name='number' onChange={(e)=>setNumber(e.target.value)}/>
                <br/>
                <br/>
<button>submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default Post;
