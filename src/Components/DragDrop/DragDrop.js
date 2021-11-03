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
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const [temp, setTemp] = useState({
        id: 23234,
        text: ''
    })


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
        drop: (item) => {
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
        const itemsList = board1.filter((item) => id === item.id)
        setBoard1((board) => [...board, itemsList[0]])
        console.log(board1)
    }
    const addItemToBoard2 = (id) => {
        const itemsList = board1.filter((item) => id === item.id)
        setBoard2((board) => [...board, itemsList[0]])
    }
    const addItemToBoard3 = (id) => {
        const itemsList = board1.filter((item) => id === item.id)
        setBoard3((board) => [...board, itemsList[0]])
    }
    const addItemToBoard4 = (id) => {
        const itemsList = board1.filter((item) => id === item.id)
        setBoard4((board) => [...board, itemsList[0]])
    }

    console.log(board1)

    const handleSubmit = (e) => {
        e.preventDefault()
        let option = e.target.dataset.option
        switch (option) {
            case '1':
                return (
                    setTemp(() => {return {id: Date.now(), text: input1}}),
                    setBoard1((board) => [...board, temp])                   
                )
            case '2':
    return (
        console.log('two')
    )
            case '3':
    return (
        console.log('three')
    )
            case '4':
    return (
        console.log('four')
    )
            default:
    return
}
    }

return (
    <>
        <div className="containers">
            <div className="container">
                <h1>Backlog</h1>
                <div className='backlog' ref={drop1}>
                    {board1.map((item) => {
                        return <Item text={item.text} key={item.id} id={item.id} />
                    })}
                    <form className="form">
                        <label>
                            Enter text:<br />
                            <input type="text" name="name" value={input1} onInput={e => setInput1(e.target.value)} />&nbsp;
                        </label>
                        <input type="submit" value="Submit" data-option='1' onClick={handleSubmit} />
                    </form>
                </div>
            </div>
            <div className="container">
                <h1>On Hold</h1>
                <div className='backlog' ref={drop2}>
                    {board2.map((item) => {
                        return <Item text={item.text} key={item.id} id={item.id} />
                    })}
                    <form className="form">
                        <label>
                            Enter text:<br />
                            <input type="text" name="name" value={input2} onInput={e => setInput2(e.target.value)} />&nbsp;
                        </label>
                        <input type="submit" value="Submit" data-option='2' onClick={handleSubmit} />
                    </form>
                </div>
            </div>
            <div className="container">
                <h1>In Progress</h1>
                <div className='backlog' ref={drop3}>
                    {board3.map((item) => {
                        return <Item text={item.text} key={item.id} id={item.id} />
                    })}
                    <form className="form">
                        <label>
                            Enter text:<br />
                            <input type="text" name="name" value={input3} onInput={e => setInput3(e.target.value)} />&nbsp;
                        </label>
                        <input type="submit" value="Submit" data-option='3' onClick={handleSubmit} />
                    </form>
                </div>
            </div>
            <div className="container">
                <h1>Complete</h1>
                <div className='backlog' ref={drop4}>
                    {board4.map((item) => {
                        return <Item text={item.text} key={item.id} id={item.id} />
                    })}
                    <form className="form">
                        <label>
                            Enter text:<br />
                            <input type="text" name="name" value={input4} onInput={e => setInput4(e.target.value)} />&nbsp;
                        </label>
                        <input type="submit" value="Submit" data-option='4' onClick={handleSubmit} />
                    </form>
                </div>
            </div>
        </div>
    </>
);
}

export default DragDrop;