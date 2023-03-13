import React from "react";
import DomToImage from 'dom-to-image';
import { Button } from "semantic-ui-react";
import { saveAs } from 'file-saver';

const DownloadMeme = ({ memeEditorRef }) => {
    const HandleClick = () => {
        DomToImage
            .toBlob(memeEditorRef.current)
            .then(
                (blob) => {
                    saveAs(blob, 'my-meme.png');
                }
            );
    }

    return (
        <>
            <Button onClick={HandleClick}>Download Meme!</Button>
        </>
    )
}

export default DownloadMeme;