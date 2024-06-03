import React, { useRef } from 'react'

const DynamicForm = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    const handelTab=(e,ref)=>{
        console.log(`Working...`)
        if(e.key === "Tab"){
            e.preventDefault();
            ref.current.focus()
        }
    }

  return (
    <>
    <div>
    <input type="text" ref={inputRef1} onKeyDown={(e)=>handelTab(e,inputRef2)} placeholder='Field- 1'/>
    <input type="text" ref={inputRef2} onKeyDown={(e)=>handelTab(e,inputRef3)} placeholder='Field- 2'/>
    <input type="text" ref={inputRef3} onKeyDown={(e)=>handelTab(e,inputRef1)} placeholder='Field- 3'/>
    </div>
    </>
  )
}

export default DynamicForm