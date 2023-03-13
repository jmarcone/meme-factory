import React, { useState } from 'react';
import { DndContext, useDroppable } from '@dnd-kit/core';
import { Droppable } from './Droppable';
import MemeText from './MemeText';

const MemeEditor = ({ meme, setMemeText, memeText, bottomMemeText, selectedFile, memeEditorRef }) => {
    const containers = ['top', 'center', 'bottom'];
    const [parent, setParent] = useState('bottom');


    const handleDragEnd = (event) => {
        const { over } = event;
        // If the item is dropped over a container, set it as the parent
        // otherwise reset the parent to `null`
        setParent(over ? over.id : "top");
    }

    const backgroundImage = selectedFile?.url ? selectedFile.url : meme?.url;


    const styles = selectedFile?.url
        ? {
            // maxHeight: selectedFile?.size.height,
            // maxWidth: selectedFile?.size.width,
            backgroundImage: `url(${selectedFile.url} )`,
            aspectRatio: selectedFile?.size.width /  selectedFile?.size.height
        } : {
            maxHeight: meme?.height,
            maxWidth: meme?.width,
            backgroundImage: `url(${meme?.url} )`,
            aspectRatio: meme?.width /  meme?.height
        }

    return (

        <section id='meme-editor-container' className='meme-editor-container' style={styles} ref={memeEditorRef}>
            <DndContext onDragEnd={handleDragEnd} >
                {containers.map((id) => (
                    // We updated the Droppable component so it would accept an `id`
                    // prop and pass it to `useDroppable`
                    <Droppable key={id} id={id} >
                        {parent === id ? <MemeText memeText={memeText} setMemeText={setMemeText} id={id} /> : ''}
                    </Droppable>
                ))}
            </DndContext >
            <div className='fixed' >
                <div>{bottomMemeText}</div>
            </div>
        </section>



    );


};

export default MemeEditor;