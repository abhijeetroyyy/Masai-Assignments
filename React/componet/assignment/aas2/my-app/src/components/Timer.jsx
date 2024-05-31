import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setCount]=useState(0)
    const [isRunning,setIsRunning]=useState(true)
    useEffect(()=>{
      const id= setInterval(() => {
        setCount((prevCount)=>prevCount+1)
      }, 1000);
      return ()=>{
        console.log("cleaned up")
        clearInterval(id)
        setCount(0)
      }
    },[isRunning])
    function toggleChange(){
      setIsRunning(!isRunning)
    }
  return (
    <>
    <div>
      <h1>Timer</h1>
    {isRunning && (
    <h3>Count :- {count}</h3>)}
    <button onClick={toggleChange}>{isRunning?"UnMount":"Mount"}</button>
    </div>
    </>
  )
}

export default Timer;