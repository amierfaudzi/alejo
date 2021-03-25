import React from 'react';
import './UserCard.scss';
import { Link } from 'react-router-dom';

export default function UserCard({user, token}) {

    console.log(user)

    return (
        <>
        <Link to={{
            pathname:'/profile',
            state: {
                userId: user._id,
                token: token
            }
            }}>
            <div className="user-card">
                <div className="user-card__main">
                    <img src="http://placekitten.com/300/200" alt="" className="user-card__image"/>
                    <div className="user-card__info">
                        <h2>{user.firstName + " " + user.lastName}</h2>
                        <h3>{user.location}</h3>
                    </div>
                </div>
                <div className="user-card__side">
                    <p>{user.about}</p>
                </div>
            </div>
        </Link>
        </>
    )
}
