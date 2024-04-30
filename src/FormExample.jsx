import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormExample = () => {
    const[username, SetUserName]=useState("")

    const[newdetails, SetNewDetails]=useState()

    const notify = () => toast("Your Code is Submitted Successfully!");


    const getUserName=(event)=>{
        
        SetUserName(event.target.value)
    }

    const UserDetails=(event)=>{
        event.preventDefault()
        SetNewDetails(username)
        notify()
    }
  return (
    <section className='formSection'>
            <ToastContainer />
            <h2>Hello, {newdetails}</h2>
        <div className='inputDiv'>
            <form onSubmit={UserDetails}>
            <input type='text' placeholder='Enter input' onChange={getUserName}/>
            <br/>
            <button className='submit' type='submit'>Submit</button> 
            </form>
        </div>
    </section>
  )
}

export default FormExample;
