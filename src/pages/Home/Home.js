import React from 'react';
import './Home.scss';
import { ReactComponent as Enjoyable } from '../../assets/icons/enjoyable.svg';
import { ReactComponent as Supportive } from '../../assets/icons/supportive.svg';
import { ReactComponent as Reliable } from '../../assets/icons/reliable.svg';
import HomePic from '../../assets/images/james-timothy.jpg';
import SecondPic from '../../assets/images/heylagostechie.jpg';
import { useHistory } from 'react-router';

export default function Home() {

    const history = useHistory();
    return (
        <div className="home">
            <div className="hero">
                <div className="hero__content">
                    <h1 className="hero__content-title">Make settling in easy with Alejo</h1>
                    <p className="hero__content-description">Connect with professional guides and get access to useful resources that will give you up to date information on all you need to do to make settling in easy.</p>
                    <button onClick={()=>{
                            history.push('/signup')
                        }} className="button button--initial">Join Community</button>
                </div>
                <div>
                    <img className="hero__image" src={HomePic} alt=""/>
                </div>
            </div>

            <div className="services">
                <div className="services__header">
                    <p className="services__title">Are you an International student in Canada worrying about how to navigate life in your new home? You can count on Alejo for the answers you need. </p>
                </div>

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
                        <img className="additionalInfo__image" src={SecondPic} alt=""/>
                    </div>
                    <div className="additionalInfo__content">
                        <h2 className="additionalInfo__title">In a land of opportunities, you need the right directions</h2>
                        <p className="additionalInfo__description">An all-in-one resource hub which provides international students with the tools necessary to navigate life in Canada. Find accurate information, crowdsource answers and speak to someone from the community who has walked in your shoes and can walk with you, as you find your own way. </p>
                        <button onClick={()=>{
                            history.push('/signup')
                        }} className="button">Join community</button>
                    </div>
            </div>

        </div>
    )
}
