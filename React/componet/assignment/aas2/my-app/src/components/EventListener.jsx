import React, { useEffect, useState } from 'react';

const EventListener = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const mouseMovement = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    if (isRunning) {
      document.addEventListener("wheel", mouseMovement);
    } else {
      document.removeEventListener("wheel", mouseMovement);
    }

    return () => {
      console.log("cleaned up");
      document.removeEventListener("wheel", mouseMovement);
    };
  }, [isRunning]);

  function toggleChange() {
    setIsRunning(!isRunning);
  }

  return (
    <>
      <div>
        <h1>Event Listener</h1>
        <button onClick={toggleChange}>{isRunning ? "Unmount" : "Mount"}</button>
        {isRunning && <h3> x:{mousePosition.x} y:{mousePosition.y}</h3>}
      </div>
    </>
  );
};

export default EventListener;
