import React from 'react';
import './Home.scss';
import { ReactComponent as Enjoyable } from '../../assets/icons/enjoyable.svg';
import { ReactComponent as Supportive } from '../../assets/icons/supportive.svg';
import { ReactComponent as Reliable } from '../../assets/icons/reliable.svg';

export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero__content">
                    <h1 className="hero__content-title">Make settling in easy with Alejo</h1>
                    <p className="hero__content-description">Connect with professional guides and get access to useful resources that will give you up to date information on all you need to do to make settling in easy.</p>
                    <button>Join Community</button>
                </div>
                <div className="hero__image">
                    <img src="http://placekitten.com/400/480" alt=""/>
                </div>
            </div>

            <div className="services">
                <h1 className="services__title">What we offer</h1>
                <div className="card-wrapper">
                    <div className="home-card">
                        <Reliable/>
                        <h3 className="home-card__title">Reliable</h3>
                        <p>At Alejo you will always find exctly what you need to make your stay a memorable one.</p>
                    </div>
                    <div className="home-card">
                        <Supportive/>
                        <h3 className="home-card__title">Supportive</h3>
                        <p>Our guides are alwas ready to provide you with the answers you seek</p>
                    </div>
                    <div className="home-card">
                        <Enjoyable/>
                        <h3 className="home-card__title">Enjoyable</h3>
                        <p>Alejo gives you a chance to get to know Canada and have the fun you deserve.</p>
                    </div>
                </div>
            </div>

            <div className="additionalInfo">
                    <div>
                        <img src="http://placekitten.com/400/400" alt=""/>
                    </div>
                    <div className="additionalInfo__content">
                        <h2 className="additionalInfo__title">In a land of opportunities, you need the right directions</h2>
                        <p>Alejo is your one source for job lisitngs, homes, holiday destinations and also professional guides who will be ready to assist you in settling in and finding the right jobs and homes for your stay. We will also give you guides to everything you need.</p>
                        <button>Join community</button>
                    </div>
            </div>

        </div>
    )
}
