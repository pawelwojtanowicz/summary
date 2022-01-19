import React, { useState } from "react";
import Button from '@mui/material/Button';

function Toggle(){
    const [text, setText] = useState(true)
    const toButton = () => {
        setText(!text)
    } 
    return (
        <div>
        <Button variant="outlined" onClick={toButton}>change me</Button>
        <p>{text ? 'unchanged' : 'changed'}</p>
        </div>
        
    );
}
export default Toggle;