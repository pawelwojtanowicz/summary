import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Inputs () {
    
    const [someNumber, setSomeNumber] = useState(0)
    const [someText, setSomeText] = useState("this is some text to change")
    const [textButton, setTextButton] = useState()
    const changer = () => {
        setSomeText(someText)
    }

    return (
    <div>
        
        <TextField id="outlined-basic" label="Outlined" variant="outlined"
        name="Input"
        type="number"
        value={someNumber}
        onChange={(e) => setSomeNumber(e.target.value)}
        />
        <input 
        name="Input"
        type="number"
        value={someNumber}
        onChange={(e) => setSomeNumber(e.target.value)}
        />
        <p>{someNumber}</p>

      
        <TextField
        label="Text to change"
        id="filled-size-normal"
        defaultValue="Normal"
        variant="filled"
        name="Input"
        type="text"
        value={someText}
        onChange={(e) => setSomeText(e.target.value)}
        />
        <Button variant="contained" size="small" onClick={() => setTextButton(someText)}>Click me to show text!</Button>
        <p>{textButton && <div>{textButton}</div>}</p>


    </div>
    )
}

export default Inputs;