import React from 'react'

const Map = () => {
    const arr=[10,20,30,40]
  return (
    <div>
        {arr.map(
            (value, index)=> <li key={index}>{value}</li>
        )}
    </div>
  )
}

export default Map
 