import React from 'react';
import './Profile.scss';
import { gql, useQuery } from '@apollo/client';

const SINGLE_USER_QUERY = gql`
query SingleUser($id: ID!){
  user(id: $id){
    firstName,
    lastName,
    about,
    location,
    guide,
    expertise,
    email
  }
}`

export default function Profile() {

    const {loading, error, data} = useQuery(SINGLE_USER_QUERY, {
        variables: {
        id: "604e65937c283b23f4924acb"
    }});

    if(data){
        console.log(data.user, loading, error);
      }
    
    return (
        <div className="profile">
            <div className="profile__bio">
                <div className="profile__bio-top">
                    <div className="profile__frame">
                        <img className="profile__image" src="http://placekitten.com/250/250" alt=""/>
                    </div>
                    <div>
                        <h2>John Doe</h2>
                        <h3>john.doe@mail.com</h3>
                        <h3>Toronto, Ontario</h3>
                    </div>
                </div>
                <div className="extras">
                    <div className="extras__title">
                        The title
                    </div>
                    <div className="extras__content">
                        The content
                    </div>
                </div>
            </div>
            <div className="profile__info">
                <div className="info-box">
                    <div className="info-box__title">
                        <h3>Expertise</h3>
                    </div>
                    <div className="info-box__content">
                        Expertise
                    </div>
                </div>
                <div className="info-box">
                    <div className="info-box__title">
                        <h3>Expertise</h3>
                    </div>
                    <div className="info-box__content">
                        Expertise
                    </div>
                </div>
                <div className="info-box">
                    <div className="info-box__title">
                        <h3>Expertise</h3>
                    </div>
                    <div className="info-box__content">
                        Expertise
                    </div>
                </div>
            </div>
        </div>
    )
}
