import {useRef,useEffect} from 'react'

const DomInteraction = () => {
    const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = getRandomColor();
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightgray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      Click me to change my color!
    </div>
  );
};

export default DomInteraction