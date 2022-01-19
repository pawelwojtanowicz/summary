import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';

function Toggle2() {
    const [ blue, setBlue ] = useState (false);
    const [ number, setNumber] = useState (false)
    const changer = () => {
        setBlue(!blue)
        setNumber(!number)
    }

    return (
        <div>
            <Button variant="contained" className={blue ? 'something' : 'something2' } onClick={changer}> CLICK ME!</Button>
            <br/>
            <p className={blue ? 'something' : 'something2' }>{number ? 0 : 1}</p>
        </div>
    )
}

export default Toggle2;