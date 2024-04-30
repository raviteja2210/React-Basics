
import React, { useState } from 'react'

const Circuit = () => {
    const[game, setGame]=useState(true)

    const Mygame=()=>{
        return(
            <div> I love you </div>
        )
    }
  return (
    <div>
        {game && <Mygame/>}
    </div>
  )
}

export default Circuit
