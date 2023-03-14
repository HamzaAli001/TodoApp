"use client"
import React, { useState } from 'react'

export default function CounterApp() {
  const [counter, setcounter]=useState(0)
  const increment =()=>{
    setcounter(counter+1)
  }
  const decrement =()=>{
    setcounter(counter-1)
  }
    return (
        <>
        <button onClick={increment}>Increment</button>
        {counter}
        <button onClick={decrement}>Decrement</button>
        
        </>
  )
}
