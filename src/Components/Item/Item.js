import React from 'react';
import {useDrag} from 'react-dnd'

function Item({id, text}) {
    const [, drag] = useDrag(()=> ({
        type: 'item',
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            opacity: monitor.isDragging() ? 0.5 : 1
        }),
    }))
    return <div className="component" ref={drag}>{text}</div>
}

export default Item;