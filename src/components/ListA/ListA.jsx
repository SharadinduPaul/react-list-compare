import React, { useEffect} from 'react'
import Item from '../item/Item'

export default function ListA({item, setItem, inputtext, setinputtext}) {

    const show = (e) =>{
        setinputtext(e.target.value)
    }
    const clicked = () =>{
        setItem([...item, {text: inputtext, id : Math.random()}]) 
        setinputtext("")  
    }
    useEffect(() => {
        console.log(item)
        console.log(item.length)
        // console.log(item[item.length-1].text)
    }, [item])
    return (
        <div className="ListA">
            <h1>List A</h1>
            <div style={{display: 'flex'}}>
                <input className="addtoList" placeholder="Enter a list item" value={inputtext} type="text" onChange={(e)=>show(e)}/>
                <button className="addBtn" onClick={clicked}><i className="fas fa-plus-circle"></i></button>
            </div>
            {item.map((itemSingle)=>(
                <Item key={itemSingle.id} items={item} item={itemSingle} setItem={setItem}/>
            ))}
        </div>
    )
}
