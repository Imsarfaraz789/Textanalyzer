import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("Uppercase Was clicked")
        let newtext = text.toUpperCase()
        setText(newtext)
    }

    const handleonchange = (event) =>{
        setText(event.target.value)

    }

    const [text, setText] = useState("Enter text here")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
