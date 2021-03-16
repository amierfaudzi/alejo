import React from 'react';
import './Home.scss';

export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero__content">
                    <h1 className="hero__content-title">Welcome to Alejo</h1>
                    <p className="hero__content-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, recusandae officiis. Mollitia porro repellat vel asperiores deleniti voluptates commodi, veritatis amet necessitatibus ipsum nulla earum, ipsa expedita. Possimus beatae, esse mollitia incidunt necessitatibus, reprehenderit voluptates blanditiis sequi soluta at nisi ratione harum maxime aliquid fugiat perspiciatis error laborum. Recusandae, alias?</p>
                </div>
                <div className="hero__image">
                    <img src="http://placekitten.com/400/480" alt=""/>
                </div>
            </div>

        </div>
    )
}
