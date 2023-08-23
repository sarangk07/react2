import React,{useState} from "react";

let Modes = ()=> {
    const [dark, setChange] = useState(false);
    const change = () => {
        setChange(!dark);
    };
    const backgroundColor = dark ? 'black': 'white'
    
    return(
        <div style={{backgroundColor}} className="maindiv">
            

            <button onClick={change}>Change Theme</button>

        </div>
    )
}

export default Modes;
