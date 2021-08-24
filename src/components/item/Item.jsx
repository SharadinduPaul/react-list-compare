import React from 'react'
import './Item.css'

export default function Item({items, item, setItem}) {
    const deleteHandler = () =>{
        setItem(items.filter((e)=>e.id !== item.id))
        console.log(items)
    }
    return (
        <div style={{display: 'flex'}}>
            <div className="item">
               {item.text}
            </div>
            <button className="deleteBTN" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}
