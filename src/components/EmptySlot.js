import React, { useEffect } from 'react';

function EmptySlot({ setDisplayMole }) { 
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000); // Random number of seconds
        let timer = setTimeout(() => {
            setDisplayMole(true); 
        }, randSeconds);

        // Cleanup function to clear the timer when the component unmounts or before the effect runs again
        return () => clearTimeout(timer);
    }, [setDisplayMole]); // Depend on the setter function

    return <div className="empty-slot"></div>;
}

export default EmptySlot;
