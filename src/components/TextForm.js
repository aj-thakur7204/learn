import React from 'react'
import { useState } from 'react'


export default function Textform (props){
    
    

    //  textareat state 
    const [textarea, setTextarea] = useState();
    
    const onClickUppercase = () => {
        let textUpper = textarea.toUpperCase();
        setTextarea(textUpper);
    }
    const onClickLowercase = () => {
        const textUpper = textarea.toLowerCase();
        setTextarea(textUpper);
    }
    const onChangeText = (event) => {
        setTextarea(event.target.value)
    }

    
    return(
        <>
            <div className={`container mt-2`}  >  
                <form>
                    <div className="form-group">
                        <h3 className={`navbar-${props.themeMode} `}>Analyse here text</h3>
                        <textarea className={`form-control`} onChange={onChangeText} value={textarea} id="Textarea" rows="8"></textarea>
                    </div>
                </form>
                <button type="button" onClick={onClickUppercase} className="btn btn-primary">Uppercase</button>
                <button type="button" onClick={onClickLowercase} className="btn btn-primary mx-2">Lowecase</button> 
                
                <div className="jumbotron">
                    <h1 className="display-4">Preview your text</h1>
                    
                    <hr className="my-4" />
                    <p>{textarea}</p>                       
                </div>
            </div> 
        </>
    )   
}
