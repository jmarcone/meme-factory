import React, { useRef } from "react";

export default ({ setMemeText, memeText, bottomMemeText, setBottomMemeText }) => {
    const textRef = useRef();
    const bottomTextRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        setMemeText(textRef.current.value)
        setBottomMemeText(bottomTextRef.current.value)
    }
    return (<>
        <form className="ui form" onClick={handleClick}>

            <div className="field">
                <label>Email address</label>
                <input type="text" name="memeText" id="memeText" aria-describedby="memeHelp" placeholder="Enter meme text..." ref={textRef} defaultValue={memeText} />
            </div>
            
            <div className="field">
                <label>Email address</label>
                <input type="text" placeholder="Enter bottom text..." ref={bottomTextRef} defaultValue={bottomMemeText} />
            </div>
            
            <button className="ui button" type="submit">Update</button>
        </form>
    </>)
}