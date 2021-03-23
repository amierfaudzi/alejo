import React, { useState } from 'react';
import './OptionsBox.scss';
import {ReactComponent as Plus} from '../../assets/icons/add.svg'

export default function OptionsBox() {

    const [other, setOther] = useState('');
    const [ list, setList] = useState(["Job", "Vacation", "Immigration"])
    const [chosen, setChosen] = useState([]);

    return (
        <div className="options-box">
            <>
                {chosen.map((item)=>{
                    return (
                        <div className="options options--chosen" onClick={()=>{
                            let newList = [...list];
                            let oldList = chosen.filter(listItem => listItem !== item)
                            newList.push(item)
                            setList(newList);
                            setChosen(oldList);
                        }}>
                            {item}
                        </div>
                    )
                })}
            </>
            < >
                {list.map((item)=>{
                    return (
                        <div className="options" onClick={()=>{
                            let newList = [...chosen];
                            let oldList = list.filter(listItem => listItem !== item)
                            newList.push(item)
                            setList(oldList);
                            setChosen(newList);
                        }}>
                            {item}
                        </div>
                    )
                })}
            </>
            <div className="other">
                <label htmlFor="" onClick={()=>{
                    if(other){
                        let newItem = other;
                        let newList = [...chosen]
                        newList.push(newItem)
                        setChosen(newList);
                        setOther('');
                    } else {
                        alert("Please fill in the option!")
                    }
                }}><Plus className="other__icon"/></label>
                <input type="text" placeholder="others" value={other} onChange={(event)=>{
                    setOther(event.target.value)}} className="other__input"/>
            </div>
        </div>
    )
}
