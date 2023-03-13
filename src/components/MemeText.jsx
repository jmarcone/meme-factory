import React from "react";
import { Draggable } from "./Draggable";

const MemeText = ({ memeText, id}) => {
    return (<Draggable id={id} >
        <div>{memeText}</div>
    </Draggable>);
}

export default MemeText;