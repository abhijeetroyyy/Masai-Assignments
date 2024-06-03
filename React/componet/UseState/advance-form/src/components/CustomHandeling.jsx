import React, { useRef, useState } from 'react'

const CustomHandeling = () => {
    const inputRef1=useRef(null)
    const inputRef2 =useRef(null)
    const [error,SetError]=useState("")
    const handelSubmit =(e)=>{
        e.preventDefault();
        const formData={
            field1:inputRef1.current.value,
            field2:inputRef2.current.value,
        }
        if(formData.field1 == ""){
            SetError("Field 1 cannot be empty");
            return ;
        }
        if(formData.field2 == ""){
            SetError("Field 2 cannot be empty");
            return ;
        }

    }
  return (
   <>
   <div>
    <form onSubmit={handelSubmit}>
    <input ref={inputRef1} type="text"  placeholder='Enter charactrter' />
    <input ref={inputRef2} type="text" placeholder='Enter Text' />
    {error && (<p style={{color:"red"}}>{error}</p>) }
    <button type='submit'> Submit</button>
    </form>
   </div>
   </>
  )
}

export default CustomHandeling