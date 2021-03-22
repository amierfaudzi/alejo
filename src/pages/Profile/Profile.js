import React from 'react';
import './Profile.scss';
import { gql, useQuery } from '@apollo/client';


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
    
    let userId = props.location.state.data?.login.user._id || props.location.state.userId;
    let user;
    const {loading, error, data} = useQuery(USERINFO_QUERY, {
        variables: {
        id: userId
    }});

    if(data){
        console.log(data, loading, error);
        user = data.superUser;
        console.log(user)

    }
    
    return (
        <div className="profile">
            <div className="profile__bio">
                <div className="profile__bio-top">
                    <div className="profile__frame">
                        <img className="profile__image" src="http://placekitten.com/250/250" alt=""/>
                    </div>
                    <div>
                        {loading ? "Loading"
                        :
                        <>
                        <h2>{user.firstName + " " + user.lastName}</h2>
                        <h3>{user.email}</h3>
                        {loading ? "Loading location" : user.location}
                        </>
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
                    </div>
                    <div className="info-box__content">
                        {loading ? "Loading" : user.expertise}
                    </div>
                </div>
                <div className="info-box">
                    <div className="info-box__title">
                        <h3>Calendly Link</h3>
                    </div>
                    <div className="info-box__content">
                        {loading ? "Loading" : user.calendly}
                    </div>
                </div>
                <div className="info-box">
                    <div className="info-box__title">
                        <h3>Quote</h3>
                    </div>
                    <div className="info-box__content">
                        {loading ? "Loading" : user.quote}
                    </div>
                </div>
            </div>
        </div>
    )
}
