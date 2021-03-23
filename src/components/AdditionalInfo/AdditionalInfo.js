import React, { useState } from 'react';
import OptionsBox from '../OptionsBox/OptionsBox';
import './AdditionalInfo.scss';

export default function AdditionalInfo() {

    const [guide, setGuide] = useState(false);

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
            
            <OptionsBox/>
            
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
