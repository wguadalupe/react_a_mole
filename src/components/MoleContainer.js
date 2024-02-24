import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

const MoleContainer = ({ setScore, score }) => {
  const [displayMole, setDisplayMole] = useState(false);

  const handleClick = () => {
    setScore(score + 1); 
    setDisplayMole(false); 
  };

  useEffect(() => {
   
    if (!displayMole) {
      const randSeconds = Math.ceil(Math.random() * 3000) + 2000; // Random delay between 2 and 5 seconds
      const timer = setTimeout(() => setDisplayMole(true), randSeconds);
      return () => clearTimeout(timer); // Cleanup the timer
    }
    
  }, [displayMole]); 

  return displayMole ? (
    <Mole setDisplayMole={setDisplayMole} handleClick={handleClick} />
  ) : (
    <EmptySlot setDisplayMole={setDisplayMole}/> 
  );
};

export default MoleContainer;
