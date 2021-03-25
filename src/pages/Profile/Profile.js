import React, { useState } from 'react';
import './Profile.scss';
import { gql, useQuery } from '@apollo/client';
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Expertise } from '../../assets/icons/expertise.svg';
import { ReactComponent as Calendly } from '../../assets/icons/calendly.svg';
import { ReactComponent as Quote } from '../../assets/icons/quote.svg';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';
import FakeProfilePic from '../../assets/images/miguel-bruna.jpg';


const USERINFO_QUERY = gql`
query SuperUser($id: ID!){
  superUser(id: $id){
    email,
    firstName,
    lastName,
    guide,
    about,
    location,
    expertise,
    calendly,
    quote,
  }
}`

export default function Profile(props) {
    
    const [editModal, setEditModal]=useState(false);
    
    let userId = props.location.state?.data?.login?.user._id || props.location?.state?.userId;
    let token = props.location?.state?.token || props.location.state?.data?.login?.token || '';  
    
    let user;
    const {loading, error, data} = useQuery(USERINFO_QUERY, {
        variables: {
        id: userId
    }});

    if(data){
        console.log(data, loading, error);
        user = data.superUser;
    }

    console.log(userId, token)
    
    return (
        <div className="profile">
            {token ? 
             <button className="modal__btn" onClick={()=>{
                setEditModal(!editModal)
            }}> <Edit className="modal__icon"/></button>
            :

            ""
            }
           
            {!editModal ?
            <>
            <div className="profile__bio">
            <div className="profile__bio-top">
                <div className="profile__frame">
                    <img className="profile__image" src={FakeProfilePic} alt=""/>
                </div>
                <div>
                    {loading ? "Loading"
                    :
                    <div className="user-box">
                    <p className="user-box__main">{user.firstName + " " + user.lastName}</p>
                    
                    <div className="user-box__wrapper">
                        <Email/>
                        <p className="user-box__secondary">{user.email}</p>
                    </div>
                    
                    <div className="user-box__wrapper">
                        <Location/>
                        <p className="user-box__secondary">{user.location}</p>
                    </div>
                    
                    </div>
                    }

                </div>
            </div>
            <div className="extras">
                <div className="extras__title">
                    About
                </div>
                <div className="extras__content">
                {loading ? "Loading" : user.about}
                </div>
            </div>
        </div>
        <div className="profile__info">
            <div className="info-box">
                <div className="info-box__title">
                    <h3>Expertise</h3>
                    <Expertise/>
                </div>
                <div className="info-box__content">
                    {loading ? "Loading" : 
                    <>
                        {user.expertise.map((data, index) => {
                            return (
                                <div key={index} className="pill">
                                    <p>{data}</p>
                                </div>
                            )
                        })}
                    </>}
                </div>
            </div>
            <div className="info-box">
                <div className="info-box__title">
                    <h3>Calendly Link</h3>
                    <Calendly/>
                </div>
                <div className="info-box__content">
                    {loading ? "Loading" : user.calendly}
                </div>
            </div>
            <div className="info-box">
                <div className="info-box__title">
                    <h3>Quote</h3>
                    <Quote/>
                </div>
                <div className="info-box__content">
                    {loading ? "Loading" : user.quote}
                </div>
            </div>
        </div>
        </>
        :
        <AdditionalInfo user={user}/>
        }
        </div>
    )
}
