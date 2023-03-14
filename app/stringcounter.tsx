"use client";

//import { Inter } from '@next/font/google'
import { useState } from 'react';

//const inter = Inter({ subsets: ['latin'] })

export default  function StringPrac() {
  const [task, setval]= useState("string 1") // first variable which we want to update, 2nd variable by which we want to update
  const [task1, setval1]= useState("string 2")

  //const task= "app creation"
  const ValueChangeHolder =(e:any)=>{
    //console.log("e is", e.target.value);
    setval(e.target.value);
  }
  const ValueChangeHolder1 =(e:any)=>{
    //console.log("e is", e.target.value);
    setval1(e.target.value);
  }
  return (
    <>
    <input type={'text'} placeholder="Enter todo's" value={task} onChange={ValueChangeHolder}/>
    <br/>
    <input type={'text'} placeholder="Enter todo's" value={task1} onChange={ValueChangeHolder1}/>
    <br/>
    Length of string 1:{task.length}
    <br/>
    length of string 2: {task1.length}
    </>
  )
}
