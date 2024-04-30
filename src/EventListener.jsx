import React from 'react'

import { useState, useEffect } from 'react'

const EventListener = () => {
    const[size, setSize]=useState({
        width : window.innerWidth,
        height : window.innerHeight,
    });

    const updateSize=()=>{
        setSize({
            width : window.innerWidth,
            height : window.innerHeight
        });
    };
    useEffect(()=>{
        window.addEventListener('resize', updateSize);
        return ()=>{
            window.removeEventListener('resize', updateSize)
        };
    }, []);
    return (
        <div>
            <h1>Event Listener</h1>
            <p> Examples</p>
            <p style={{color : "red"}}> width : {size.width}px</p>
            <p style={{color : "red"}}> height : {size.height}px</p>
        </div>
    ) 
}

export default EventListener;
