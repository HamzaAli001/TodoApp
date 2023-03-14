import React from 'react'
import AdvanceCounterApp from './AdvanceCounterApp'
import CounterApp from './CounterApp'
import StringPrac from './stringcounter'
import ToDoApp from './ToDoApp'

export default function page() {
  return (
    <>
    <h2>ToDo List</h2>
    <ToDoApp/>
    
    </>
  )
}

//Write it inside <></> to on counters
{/* <br/> 
    <h2>Length Counter of a String</h2>
    <StringPrac/>
    <br/> 
    <br/> 
    <h2> Counter App</h2>
    <CounterApp/>
    <br/> 
    <h2> Counter App Advance</h2>
    <AdvanceCounterApp/> */}