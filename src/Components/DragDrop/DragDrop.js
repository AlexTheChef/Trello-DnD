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
    const [board1, setBoard1] = useState(ItemsList)
    const [board2, setBoard2] = useState([])
    const [board3, setBoard3] = useState([])
    const [board4, setBoard4] = useState([])

    

    const [, drop1] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard1(item.id)          
        },
    }))

    const [, drop2] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard2(item.id) 
        },
    }))

    const [, drop3] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard3(item.id)            
        },
    }))

    const [, drop4] = useDrop(() => ({
        accept: "item",
        drop: (item) =>{
            removeItemFromBoards(item.id)
            addItemToBoard4(item.id)            
        },
    }))

    const removeItemFromBoards = (id) => {
        setBoard1(prev => prev.filter(item => item.id !== id))
        setBoard2(prev => prev.filter(item => item.id !== id))  
        setBoard3(prev => prev.filter(item => item.id !== id))
        setBoard4(prev => prev.filter(item => item.id !== id))

    }

    const addItemToBoard1 = (id) => {
        const itemsList = ItemsList.filter((item) => id === item.id)
        setBoard1((board) => [...board, itemsList[0]])
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
            <div className="containers">
                <div className="container">
                    <h1>Backlog</h1>
                    <div className='backlog' ref={drop1} data-option='1'>
                        {board1.map((item) => {
                            return <Item text={item.text} key={item.id} id={item.id} />
                        })}
                    </div>
                </div>
                <div className="container">
                    <h1>On Hold</h1>
                    <div className='backlog' ref={drop2} data-option='1'>
                        {board2.map((item) => {
                            return <Item text={item.text} key={item.id} id={item.id} />
                        })}
                    </div>
                </div>
                <div className="container">
                    <h1>In Progress</h1>
                    <div className='backlog' ref={drop3} data-option='1'>
                        {board3.map((item) => {
                            return <Item text={item.text} key={item.id} id={item.id} />
                        })}
                    </div>
                </div>
                <div className="container">
                    <h1>Complete</h1>
                    <div className='backlog' ref={drop4} data-option='1'>
                        {board4.map((item) => {
                            return <Item text={item.text} key={item.id} id={item.id} />
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DragDrop;