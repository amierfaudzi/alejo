import React from 'react';
import './UserCard.scss';
import { Link } from 'react-router-dom';
import FakePictureGenerator from '../FakePictureGenerator/FakePictureGenerator';

export default function UserCard({user, token}) {

    console.log(user)

    return (
        <>
        <Link className="user-link" to={{
            pathname:'/profile',
            state: {
                userId: user._id,
                token: token
            }
            }}>
            <div className={user.guide ? "user-card user-card--guide" :"user-card"}>
                <div className="user-card__main">
                    <FakePictureGenerator userId={user._id} name="user-card__image"/>
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
