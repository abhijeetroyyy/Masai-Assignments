import React, { useRef , useEffect } from 'react'

const FocableInputField = () => {
    const inputRef1=useRef(null)
    useEffect(() => {
        inputRef1.current.focus();
      }, []);
  return (
    <>
    <label htmlFor="autoFocusInput">Auto Focus Input :- </label>
    <input type="text" placeholder='Enter focused text' ref={inputRef1} />
    </>

  )
}

export default FocableInputField