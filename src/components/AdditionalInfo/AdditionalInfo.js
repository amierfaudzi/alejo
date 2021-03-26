import React, { useState } from 'react';
import OptionsBox from '../OptionsBox/OptionsBox';
import './AdditionalInfo.scss';
import { gql, useMutation } from '@apollo/client';

const ADDITIONAL_INFO = gql`
    mutation AddUserInfo(
        $about: String, 
        $guide: Boolean, 
        $location: String, 
        $calendly: String,
        $quote: String,
        $expertise: [String]){
        addUserInfo(userInfoInput: {
            about: $about, 
            guide: $guide, 
            location: $location, 
            calendly: $calendly,
            quote: $quote,
            expertise: $expertise
        })
    }
`

export default function AdditionalInfo({user, editModal, setEditModal}) {

    const [guide, setGuide] = useState(user.guide);
    const [ additionalInfoState, setAdditionalInfoState] = useState({
        about: user.about || '',
        expertise: user.expertise || [],
        location: user.location ||'',
        calendly: user.calendly ||'',
        quote: user.quote || '',
        guide: user.guide || false
    });

    const [addUserInfo, { loading, error} ] = useMutation(ADDITIONAL_INFO, {
        variables: {
            about: additionalInfoState.about,
            expertise: additionalInfoState.expertise,
            location: additionalInfoState.location,
            calendly: additionalInfoState.calendly,
            quote: additionalInfoState.quote,
            guide: additionalInfoState.guide
        }, onCompleted: (data) =>{
            console.log(data)
        }, onError: (error)=>{
            console.log(error)
        }
    })

    return (
        <div className="additional-info">
            <div className="additional-info__header">
                <h1>Welcome to Alejo </h1>
                <p>Kindly create your profile to complete your registration</p>
            </div>
            <div className="form">
                <h2 className="form__title">Enter your bio</h2>
                <textarea name="" id="" cols="30" rows="10" value={additionalInfoState.about} onChange={(event)=>{
                    setAdditionalInfoState({...additionalInfoState, about: event.target.value})
                }}></textarea>
            </div>
            <div className="form">
                <h2 className="form__title">Location</h2>
                <input type="text" placeholder="Enter your location" value={additionalInfoState.location} onChange={(event)=>{
                    setAdditionalInfoState({...additionalInfoState, location: event.target.value})
                }}/>
            </div>

            <div className="form">
                <h2 className="form__title">Whats a fun quote/saying that you like</h2>
                <input type="text" placeholder="To be or not to be do be do be" value={additionalInfoState.quote} onChange={(event)=>{
                    setAdditionalInfoState({...additionalInfoState, quote: event.target.value})
                }}/>
            </div>

            
            <div className="form">
                <h2 className="form__title">Kindly select your area of interest</h2>
                <OptionsBox setAdditionalInfoState={setAdditionalInfoState} additionalInfoState={additionalInfoState} user={user}/>
            </div>
            
            <div className="form form--guide">
                <h2 className="form__title">Do you wish to be a guide?</h2>
                <label className="switch">
                        <input type="checkbox" checked={guide} onChange={()=> {
                            let currentGuide = !guide;
                            setAdditionalInfoState({...additionalInfoState, guide: currentGuide})
                            setGuide(!guide)
                        }}/>
                        <span className="slider round"></span>
                </label>

            </div>
            { guide ? 
                <>
                    <div className="form">
                       <h2 className="form__title">Enter your calendly link</h2>
                       <input type="text" placeholder="calendly/johndoe" value={additionalInfoState.calendly} onChange={(event)=>{
                    setAdditionalInfoState({...additionalInfoState, calendly: event.target.value})
                }}/>
                   </div>
                </>
            :
            ''}
            <div className="additional-info__button-tray">
                <button className="button button--skip" onClick={()=>{
                    setEditModal(!editModal)
                }}>Skip for now</button>
                <button className="button" onClick={()=> {
                    addUserInfo();
                }}>Submit</button>
            </div>
        </div>
    )
}
