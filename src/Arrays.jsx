import React from 'react'

const Arrays = () => {
    let fruits=["Apples", 23]

    let players=[
        {
            cricket:"Rohit",
            football:"Ronaldo",
            chess:"anand",
        },
    ];

  return (
    <div>
        {/*{players.map((item)=>{
            return(
                <div>
                    <h2>{item.cricket}</h2>
                    <h2>{item.football}</h2>
                    <h2>{item.chess}</h2>


                </div>

            );
        })*/}
        {players[0].chess}<br/>
        {players[0].cricket}
    </div>
  )
}

export default Arrays;
