import React, { useState } from 'react';
import './OptionsBox.scss';
import {ReactComponent as Plus} from '../../assets/icons/add.svg'

export default function OptionsBox({setAdditionalInfoState, additionalInfoState, user}) {

    const [other, setOther] = useState('');
    const [ list, setList] = useState(["Job", "Vacation", "Immigration"])
    const [chosen, setChosen] = useState(user.expertise || []);

    return (
        <div className="options-box">
            <>
                {chosen.map((item)=>{
                    return (
                        <div className="options options--chosen" onClick={()=>{
                            let newList = [...list];
                            let oldList = chosen.filter(listItem => listItem !== item)
                            newList.push(item)
                            setAdditionalInfoState({...additionalInfoState, expertise: oldList});
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
                <input type="text" placeholder="others" value={other} onChange={(event)=>{
                    setOther(event.target.value)}} className="other__input" onKeyDown={(event)=>{
                        if(event.key=="Enter"){
                            if(other){
                                let newItem = other;
                                let newList = [...chosen]
                                newList.push(newItem)
                                setChosen(newList);
                                setAdditionalInfoState({...additionalInfoState, expertise: newList});
                                setOther('');
                            } else {
                                alert("Please fill in the option!")
                            }
                        }
                    }}/>
                        <Plus className="other__icon"/>

            </div>
        </div>
    )
}
