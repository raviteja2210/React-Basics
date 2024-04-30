import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';

const Home = () => {
  const[auth, setAuth]=useState(false)
  if(auth){
    return <Redirect to='/dashboard' />
  }
  return (
    <div>
      <h2>Home</h2>
      <button onClick={()=> setAuth(true)}>Login</button>
    </div>
  )
}

export default Home;
