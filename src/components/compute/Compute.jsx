import React, {useState} from 'react'
import Citem from '../Citem/Citem'

export default function Compute({item1, item2}) {
    let c = 0
    let common = []
    let unique1 = item1
    let unique2 = item2
    const length1 = item1.length
    const length2 = item2.length

    const [Common, setCommon] = useState([])
    const [Unique1, setUnique1] = useState([])
    const [Unique2, setUnique2] = useState([])
    const showCommon = () =>{
        // console.log(length1, length2)
        for(let i=0; i< length1; i++){
            for(let j=0; j<length2; j++){
                if(item1[i].text === item2[j].text){
                    common[c]= item1[i].text
                    c++
                }
            }
        }
        common = [...new Set(common)]
        for(let i=0; i<common.length; i++){
            unique1 = unique1.filter((e)=> e.text !== common[i])
            unique2 = unique2.filter((e)=> e.text !== common[i])
        }
        console.log(common)
        console.log(unique1)
        console.log(unique2)
        setCommon(common)
        setUnique1(unique1)
        setUnique2(unique2)
    }
    return (
        <div className="compute">
            <button className="compBtn" onClick={showCommon}>Compute <i className="fas fa-cog"></i></button>
            <div className="common">
                <h3>Common Items : </h3>
                {Common.map((itemSingle)=>(
                <Citem text={itemSingle}/>
                ))}
            </div>
            <div className="unique1">
                <h3>Unique Items in A : </h3>
                {Unique1.map((itemSingle)=>(
                <Citem text={itemSingle.text}/>
                ))}
            </div>
            <div className="unique2">
                <h3>Unique Items in B : </h3>
                {Unique2.map((itemSingle)=>(
                <Citem text={itemSingle.text}/>
                ))}
            </div>
            <div className="uniqueAll">
                <h3>All Unique Items : </h3>
                {Unique1.map((itemSingle)=>(
                <Citem text={itemSingle.text}/>
                ))}
                {Unique2.map((itemSingle)=>(
                <Citem text={itemSingle.text}/>
                ))} 
            </div>
        </div>
    )
}
