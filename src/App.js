import React from "react";
import "./style.css";
import {useState} from "react"


export default function App() {
  const[state,setState]=useState()
  const handleInc=()=>{
    setState(parseInt(state)+1)
  }
  const handleDec=()=>{
    setState(parseInt(state)-1)
  }
  const handleChange=(e)=>{
      setState(e.target.value)
  }
  return (
    <>
    <div>
      <input type="number" onChange={handleChange} value={state}/>
    </div>
    <div>
      <button onClick={handleInc} >increment</button>
      <button onClick={handleDec} disabled={parseInt(state)<=0}> decrement</button>
      </div>
    </>
  );
}