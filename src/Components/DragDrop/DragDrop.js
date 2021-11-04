import React, { useState, useEffect } from 'react';
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
    const [input, setInput] = useState('');
   
    useEffect(()=>{
        const data1 = localStorage.getItem('board1')
        const data2 = localStorage.getItem('board2')
        const data3 = localStorage.getItem('board3')
        const data4 = localStorage.getItem('board4')
        if(data1) {
            setBoard1(JSON.parse(data1))
        }
        if(data2){
            setBoard2(JSON.parse(data2))
        }
        if(data3){
            setBoard3(JSON.parse(data3))
        }
        if(data4){
            setBoard4(JSON.parse(data4))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('board1', JSON.stringify(board1))
        localStorage.setItem('board2', JSON.stringify(board2))
        localStorage.setItem('board3', JSON.stringify(board3))
        localStorage.setItem('board4', JSON.stringify(board4))
    })


    const [, setTemp] = useState({
        id: 23234,
        text: ''
    })

    const [, drop1] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard1(item)
        },
    }))

    const [, drop2] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard2(item)
        },
    }))

    const [, drop3] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard3(item)
        },
    }))

    const [, drop4] = useDrop(() => ({
        accept: "item",
        drop: (item) => {
            removeItemFromBoards(item.id)
            addItemToBoard4(item)
        },
    }))

    const removeItemFromBoards = (id) => {
        setBoard1(prev => prev.filter(item => item.id !== id))
        setBoard2(prev => prev.filter(item => item.id !== id))
        setBoard3(prev => prev.filter(item => item.id !== id))
        setBoard4(prev => prev.filter(item => item.id !== id))
    }

    const addItemToBoard1 = (item) => {      
        setBoard1((board) => [...board, item])
    }
    const addItemToBoard2 = (item) => {       
        setBoard2((board) => [...board, item])
    }
    const addItemToBoard3 = (item) => {      
        setBoard3((board) => [...board, item])
    }
    const addItemToBoard4 = (item) => {
        setBoard4((board) => [...board, item])
    }

    const settingBoard = () => {
        setTemp(() => { return { id: Date.now(), text: input } })
        setInput('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let option = e.target.dataset.option
        switch (option) {
            case '1':
                return (
                    settingBoard(),
                    setBoard1((board) => [...board, { id: Date.now(), text: input }])
                )
            case '2':
                return (
                    settingBoard(),
                    setBoard2((board) => [...board, { id: Date.now(), text: input }])
                )
            case '3':
                return (
                    settingBoard(),
                    setBoard3((board) => [...board, { id: Date.now(), text: input }])
                )
            case '4':
                return (
                    settingBoard(),
                    setBoard4((board) => [...board, { id: Date.now(), text: input }])
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
                                <input type="text" name="name" value={input} onInput={e => setInput(e.target.value)} />&nbsp;
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
                                <input type="text" name="name" value={input} onInput={e => setInput(e.target.value)} />&nbsp;
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
                                <input type="text" name="name" value={input} onInput={e => setInput(e.target.value)} />&nbsp;
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
                                <input type="text" name="name" value={input} onInput={e => setInput(e.target.value)} />&nbsp;
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