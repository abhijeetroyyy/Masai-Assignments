import React, { useRef ,useEffect} from 'react'

const ManagingComponents = () => {

 const inputRef = useRef(null);
 const displayRef = useRef(null);

 const handleInput = () => {
   if (inputRef.current) {
     displayRef.current.textContent = inputRef.current.value;
   }
 };

 useEffect(() => {
   const inputElement = inputRef.current;
   if (inputElement) {
     inputElement.addEventListener('input', handleInput);
   }

   return () => {
     if (inputElement) {
       inputElement.removeEventListener('input', handleInput);
     }
   };
 }, []);

 return (
   <div>
     <input ref={inputRef} type="text" placeholder="Type something..." />
     <p ref={displayRef}>Current value will appear here</p>
   </div>
 );
};

export default ManagingComponents