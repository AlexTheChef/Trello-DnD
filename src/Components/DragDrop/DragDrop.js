import React, { useState } from 'react';
import Item from '../Item/Item'
import "../../App.css"
import { useDrop } from 'react-dnd'

const ItemsList = [
    {
        id: 1,
        text: "Hello"
    },
    {
        id: 2,
        text: 'Whatsupp'
    },
    {
        id: 3,
        text: 'Yo man!'
    }
]

function DragDrop() {
    const [board1, setBoard] = useState(ItemsList)
    const [board2, setBoard2] = useState([])
    const [board3, setBoard3] = useState([])
    const [board4, setBoard4] = useState([])


    const [, drop] = useDrop(() => ({
        accept: "item",
        drop: (item) => addItemToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const [, drop2] = useDrop(() => ({
        accept: "item",
        drop: (item) => addItemToBoard2(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const [, drop3] = useDrop(() => ({
        accept: "item",
        drop: (item) => addItemToBoard3(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const [, drop4] = useDrop(() => ({
        accept: "item",
        drop: (item) => addItemToBoard4(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
            
        })
    }))

    const addItemToBoard = (id) => {
        const itemsList = ItemsList.filter((item) => id === item.id)
        setBoard((board) => [...board, itemsList[0]])
    }
    const addItemToBoard2 = (id) => {
        const itemsList = ItemsList.filter((item) => id === item.id)
        setBoard2((board) => [...board, itemsList[0]])
    }
    const addItemToBoard3 = (id) => {
        const itemsList = ItemsList.filter((item) => id === item.id)
        setBoard3((board) => [...board, itemsList[0]])
    }
    const addItemToBoard4 = (id) => {
        const itemsList = ItemsList.filter((item) => id === item.id)
        setBoard4((board) => [...board, itemsList[0]])
        console.log(id)
    }
    return (
        <>
            <div className='pictures'>{ItemsList.map((item) => {
                return <Item text={item.text} id={item.id} />
            })}
            </div>
            <div className="containers">
                <div className="container">
                    <h1>Backlog</h1>
                    <div className='backlog' ref={drop} data-option='1'>

                        {board1.map((item) => {
                            return <Item text={item.text} id={item.id} />
                        })}
                    </div>
                </div>
                <div className="container">
                    <h1>On Hold</h1>
                    <div className='backlog' ref={drop2} data-option='1'>

                        {board2.map((item) => {
                            return <Item text={item.text} id={item.id} />
                        })}
                    </div>
                </div>
                <div className="container">
                    <h1>In Progress</h1>
                    <div className='backlog' ref={drop3} data-option='1'>

                        {board3.map((item) => {
                            return <Item text={item.text} id={item.id} />
                        })}
                    </div>
                </div>
                <div className="container">
                    <h1>Complete</h1>
                    <div className='backlog' ref={drop4} data-option='1'>

                        {board4.map((item) => {
                            return <Item text={item.text} id={item.id} />
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DragDrop;