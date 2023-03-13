import React, { useState } from 'react';
import { DndContext, useSensor, PointerSensor, useSensors, MouseSensor, TouchSensor, useDroppable } from '@dnd-kit/core';

import { Droppable } from './Droppable';
import MemeText from './MemeText';

const MemeEditor = ({ meme, setMemeText, memeText, bottomMemeText  }) => {
    const containers = ['top', 'center', 'bottom'];
    const [parent, setParent] = useState('bottom');


    const handleDragEnd = (event) => {
        const { over } = event;
        // If the item is dropped over a container, set it as the parent
        // otherwise reset the parent to `null`
        setParent(over ? over.id : "top");
    }

    const styles = {
        maxHeight: meme?.height,
        maxWidth: meme?.width,
        backgroundImage: `url(${meme?.url} )`
    }

    const { setNodeRef } = useDroppable({
        id: 'unique-id',
    });

    return (

        
            <section className='meme-editor-container' style={styles}>
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