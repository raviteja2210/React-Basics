
import React from 'react'

const Filter = () => {
    const arr=[10,20,40,50,70]
    const filtered=arr.filter(
        (item) => item<40
    )
  return (
    <div>
        {filtered.map(
            (item)=> <li>{item}</li>
        )}
    </div>
  )
}

export default Filter
