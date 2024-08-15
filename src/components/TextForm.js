import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const onchange = (event) => {
        setText(event.target.value);
    }

    const changetoupper = () => {
        let newtxt = text.toUpperCase();
        setText(newtxt);
        props.showAlert("Changed to Uppercase","success");
    }
    
    const changetolower = () => {
        let newtxt = text.toLowerCase();
        setText(newtxt)
        props.showAlert("Changed to Lowercase","success");
    }
    
    const reset = () => {
        let value=("");
        setText(value);
        
        props.showAlert("Value has been Reset","success");
    }

    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Value copied ","success");
    }
    
    
    const getEmail = () => {
        if (text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)) {
            alert("Hi, the mail id is " + text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi));
        }
        else {
            alert("There is no email.")
        }
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    
    const capitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Value has been Capitalized","success");
    }
    
    const extraSpaces = ()=>{
        let words = text.split(/\s+/);
        let joinedWords = '';
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
            }
        })
        setText(joinedWords);
        props.showAlert("Extra space has been removed","success");
    }

    return (
        <>
            <h2 className={`text-${props.mode === 'light' ? 'black' : 'white'}`}>{props.heading}</h2>
            <div className="mb-3" >
                <textarea placeholder='TYPE HERE' className={"form-control"} style={{
                    backgroundColor: props.mode === 'dark' ? '#6c757d' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black'
                }} value={text} id="exampleFormControlTextarea1" rows="8" onChange={onchange}  autoFocus></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={changetoupper}>UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={changetolower}>LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={capitalize} >Capitalize</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={extraSpaces} >Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={getEmail}>Get Email</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={speak} >Speak</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 " onClick={reset}>Reset</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copy}>Copy</button>
            <div className={`container my-3 text-${props.mode==='light'?'black':'white'}`} >
                <h3 >Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charachters</p>
                <p>Time to be taken to read this article is <strong>{(0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length).toFixed(2)}</strong> minutes.</p>
            </div>

        </>
    )
}
TextForm.defaultProps = { heading: "Text here to analyze" }