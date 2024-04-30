import React from 'react'

const Second = (props) => {
    const {name, city, bike, company}=props.s;
  return (
    <di>
        <div>{name}</div>
        <div>{city}</div>
        <div>{bike}</div>
        <div>{company}</div>
    </di>
  )
}

export default Second
