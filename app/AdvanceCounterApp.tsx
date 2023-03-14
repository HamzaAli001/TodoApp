"use client"
import React, { useState } from 'react'

export default function AdvanceCounterApp() {
  const [counter, setcounter]=useState(0)
  const increment =(Kitna=1)=>{
    setcounter(counter+Kitna)
  }
  const decrement =(Kitna=1)=>{
    setcounter(counter-Kitna)
  }
    return (
        <>
        <button onClick={()=>increment(1)}>Increment BY 1</button>
        <button onClick={()=>increment(2)}>Increment BY 2</button>
        <button onClick={()=>increment(3)}>Increment BY 3</button>
        {counter}
        <button onClick={()=>decrement(1)}>Decrement BY 1</button>
        <button onClick={()=>decrement(2)}>Decrement BY 2</button>
        <button onClick={()=>decrement(3)}>Decrement BY 3</button>
        
        </>
  )
}