import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable({id, children}) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });

  const style = {
    backgroundColor: isOver ? 'rgba(51, 170, 51, .4)' : ""
  };
  
  
  return (
    <div ref={setNodeRef} style={style} className={id}>
      {children}
    </div>
  );
}