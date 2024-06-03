import React, { useRef, useState } from "react";

const RealTimeInputValidation = () => {
  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(false);

 const handelChange =()=>{
    setIsValid(inputRef.current.value.length>=5)
    }
  
  return (
    <>
      <div>
        <input
          type="text"
          ref={inputRef}
          onChange={handelChange}
          placeholder="Enter atleast 5 characters"
          style={{borderColor: isValid ? "green" : "red"}}
        />
        {isValid ? (<p>Valid Input</p>): (<p>Input must contain atleast 5 character</p>)}
      </div>
    </>
  );
};

export default RealTimeInputValidation;
