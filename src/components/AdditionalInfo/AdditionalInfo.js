import React, { useState } from 'react';
import './AdditionalInfo.scss';

export default function AdditionalInfo() {

    const [guide, setGuide] = useState(false);
    const [other, setOther] = useState('');
    const [ list, setList] = useState(["Job", "Vacation", "Immigration"])
    const [chosen, setChosen] = useState([]);

    return (
        <div className="additional-info">
            <div>
                <h1>Welcome to Alejo </h1>
                <p>Kindly create your profile to complete your registration</p>
            </div>
            <div>
                <label htmlFor="">Enter your bio</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="">Location</label>
                <input type="text" placeholder="Enter your location"/>
            </div>
            <div>
                <label htmlFor="">Do you wish to be a guide?</label>
                <input type="checkbox" name="" id="" onChange={()=> {
                    setGuide(!guide)
                }}/>
            </div>
            <div className="chosen">
                {chosen.map((item)=>{
                    return (
                        <div>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className="options">
                {list.map((item)=>{
                    return (
                        <div onClick={()=>{
                            let newList = [...chosen]
                            newList.push(item)
                            setChosen(newList);
                            console.log(chosen)
                        }}>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div>
                <label htmlFor="" onClick={()=>{
                    let newItem = other;
                    let newList = [...chosen]
                    newList.push(newItem)
                    setChosen(newList);
                    setOther('')
                }}>Add</label>
                <input type="text" placeholder="others" value={other} onChange={(event)=>{
                    setOther(event.target.value)}}/>
            </div>

            { guide ? 
                <>
                    <div>
                       <label htmlFor="">Enter your calendly link</label>
                       <input type="text" placeholder="calendly/johndoe"/>
                   </div>
                </>
            :
                   ''}

        </div>
    )
}
