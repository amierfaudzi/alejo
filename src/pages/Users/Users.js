import React from 'react';
import './Users.scss';
import { gql, useQuery } from '@apollo/client';

const ALL_USERS = gql`
    query {
        users{
        firstName
        lastName
        about
  }
}`

export default function Users() {

    const {loading, error, data} = useQuery(ALL_USERS, {});

    if(data){
      console.log(data.users, loading, error);
    }

    return (
        <div className="users">

            <div className="user-card">
                <img src="http://placekitten.com/300/200" alt="" className="user-card__image"/>
                <div className="user-card__info">
                    <h2>John Doe</h2>
                    <h3>Toronto, Ontario</h3>
                </div>
            </div>
            
            <div className="user-card">
                <img src="http://placekitten.com/300/200" alt="" className="user-card__image"/>
                <div className="user-card__info">
                    <h2>John Doe</h2>
                    <h3>Toronto, Ontario</h3>
                </div>
            </div>            
            <div className="user-card">
                <img src="http://placekitten.com/300/200" alt="" className="user-card__image"/>
                <div className="user-card__info">
                    <h2>John Doe</h2>
                    <h3>Toronto, Ontario</h3>
                </div>
            </div>            
            <div className="user-card">
                <img src="http://placekitten.com/300/200" alt="" className="user-card__image"/>
                <div className="user-card__info">
                    <h2>John Doe</h2>
                    <h3>Toronto, Ontario</h3>
                </div>
            </div>
        </div>
    )
}
