import React, { useEffect } from 'react';
import moleImg from '../components/mole.png'; 

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.setDisplayMole(false);
        }, randSeconds);
        return () => clearTimeout(timer);
    });

    return (
        <div>
            <img style={{ width: '30vw' }}
                 src={moleImg}
                 alt="Mole"
                 onClick={props.handleClick} />
        </div>
    );
}

export default Mole;
