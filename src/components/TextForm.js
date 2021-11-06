import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked :  "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = ()=>{
         // console.log("Lowercase was clicked :  "+text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase!","success");
     }
     const handleClearClick = ()=>{
        //clear the text
         let newText = '';
         setText(newText);
         props.showAlert("Text cleared!","success");
     }
     const handleCopyClick = ()=>{
        //copy the text
         let newText = document.getElementById('myBox');
         newText.select();
         navigator.clipboard.writeText(newText.value);
         props.showAlert("Text copied!","success");
     }
     const handleExtraSpaces = ()=>{
        //Remove extra spaces from the text
         let newText = text.split(/[ ]+/);
         setText(newText.join(" "));
         props.showAlert("Extra spaces removed!","success");
     }
    const handleOnChange = (event)=>{
       // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container"  style={{color: props.mode === 'dark'? 'white':'#042743'}} >
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length >0 ? text : "Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
    )
}
