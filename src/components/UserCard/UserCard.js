import React from 'react';
import './UserCard.scss';
import { Link } from 'react-router-dom';

export default function UserCard() {

    // Will receive a user object

    return (
        <>
        <Link to={{
            pathname:'/profile',
            state: {
                data: "Hello World"
            }
            }}>
            <div className="user-card">
                <div className="user-card__main">
                    <img src="http://placekitten.com/300/200" alt="" className="user-card__image"/>
                    <div className="user-card__info">
                        <h2>John Doe</h2>
                        <h3>Toronto, Ontario</h3>
                    </div>
                </div>
                <div className="user-card__side">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga similique iusto. Nemo repellat similique molestias?</p>
                </div>
            </div>
        </Link>
        </>
    )
}
