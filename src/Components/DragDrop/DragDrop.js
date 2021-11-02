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

    

    const [, drop] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard1(item.id)
           
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const [, drop2] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard2(item.id)
            
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const [, drop3] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard3(item.id)
            
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const [, drop4] = useDrop(() => ({
        accept: "item",
        drop: (item) =>{
            removeItemFromBoards(item.id)
            addItemToBoard4(item.id)
            
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
            
        })
    }))

    const removeItemFromBoards = (id) => {
        const brd1 = board1.filter((item) => item.id !== id)
        const brd2 = board2.filter((item) => item.id !== id)
        const brd3 = board3.filter((item) => item.id !== id)
        const brd4 = board4.filter((item) => item.id !== id)
        setBoard1(brd1)
        setBoard2(brd2)
        setBoard3(brd3)
        setBoard4(brd4)
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