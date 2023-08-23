import React,{useEffect, useRef} from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);

  const mousePosition = (e) => {
    const cursorElement = cursorRef.current;
    if (cursorElement) {
      cursorElement.style.left = `${e.clientX}px`;
      cursorElement.style.top = `${e.clientY}px`;
    }
  };

    useEffect( () =>{ 
        window.addEventListener('pointermove',mousePosition)
      return () => {
        window.removeEventListener('pointermove',mousePosition)
    }
    });

  return (
    <div id='cursor' ref={cursorRef}>
    </div>
  )
}
