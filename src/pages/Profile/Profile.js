import React from 'react';
import './Profile.scss';
import { gql, useQuery } from '@apollo/client';

const USERINFO_QUERY = gql`
query SingleUser($creatorId: ID!){
  userInfo(creatorId: $creatorId){
    about,
    location,
    expertise,
    calendly,
    quote,
  }
}`


export default function Profile(props) {
    
    let user;
    if(props.location.state){
        console.log(props.location.state.data.login)
        user = props.location.state.data.login.user;
    }

    const {loading, error, data} = useQuery(USERINFO_QUERY, {
        variables: {
        creatorId: props.location.state.data.login.user._id
    }});

    if(data){
        console.log(data, loading, error);
    }
    
    return (
        <div className="profile">
            <div className="profile__bio">
                <div className="profile__bio-top">
                    <div className="profile__frame">
                        <img className="profile__image" src="http://placekitten.com/250/250" alt=""/>
                    </div>
                    <div>
                        {!user ? "Loading"
                        :
                        <>
                        <h2>{user.firstName + " " + user.lastName}</h2>
                        <h3>{user.email}</h3>
                        {loading ? "Loading location" : data.userInfo.location}
                        </>
                        }

                    </div>
                </div>
                <div className="extras">
                    <div className="extras__title">
                        About
                    </div>
                    <div className="extras__content">
                    {loading ? "Loading" : data.userInfo.about}
                    </div>
                </div>
            </div>
            <div className="profile__info">
                <div className="info-box">
                    <div className="info-box__title">
                        <h3>Expertise</h3>
                    </div>
                    <div className="info-box__content">
                        {loading ? "Loading" : data.userInfo.expertise}
                    </div>
                </div>
                <div className="info-box">
                    <div className="info-box__title">
                        <h3>Calendly Link</h3>
                    </div>
                    <div className="info-box__content">
                        {loading ? "Loading" : data.userInfo.calendly}
                    </div>
                </div>
                <div className="info-box">
                    <div className="info-box__title">
                        <h3>Quote</h3>
                    </div>
                    <div className="info-box__content">
                        {loading ? "Loading" : data.userInfo.quote}
                    </div>
                </div>
            </div>
        </div>
    )
}
