import React from 'react';
import './Resources.scss';

export default function Resources() {
    return (
        <div className="resources">
            <div className="welcome">
                <h1>Welcome, Oluwakemi</h1>
            </div>
            <div className="resources__tray">
                <div className="resource-card">
                    <img src="http://placekitten.com/240/135" alt="" className="resource-card__image"/>
                    <div className="resource-card__content">
                        <p>Find Jobs</p>
                    </div>
                </div>
                <div className="resource-card">
                    <img src="http://placekitten.com/240/135" alt="" className="resource-card__image"/>
                    <div className="resource-card__content">
                        <p>Find Jobs</p>
                    </div>
                </div>
                <div className="resource-card">
                    <img src="http://placekitten.com/240/135" alt="" className="resource-card__image"/>
                    <div className="resource-card__content">
                        <p>Find Jobs</p>
                    </div>
                </div>
                <div className="resource-card">
                    <img src="http://placekitten.com/240/135" alt="" className="resource-card__image"/>
                    <div className="resource-card__content">
                        <p>Find Jobs</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="post-form">
                    <img src="http://placekitten.com/80/80" alt="" className="post-form__image"/>
                    <div className="post-form__container">
                        <p className="post-form__user">Oluwakemi Adeleke</p>
                        <form className='form'>
                            <div>
                                <label htmlFor="form-content"></label>
                                <input type="text" placeholder="Ask a question or share a post" id="form-content"/>
                            </div>
                            <button className="btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="community-post">
                    <div className="post">
                        <img src="http://placekitten.com/80/80" alt="" className="post__image"/>
                        <div className="post__content">
                            <p className="post__poster">Amier Faudzi</p>
                            <p>Where is the best boba place in Montreal?</p>
                        </div>
                    </div>
                    <div className="post">
                        <img src="http://placekitten.com/80/80" alt="" className="post__image"/>
                        <div className="post__content">
                            <p className="post__poster">Amier Faudzi</p>
                            <p>Where is the best boba place in Montreal?</p>
                        </div>
                    </div>
                    <div className="post">
                        <img src="http://placekitten.com/80/80" alt="" className="post__image"/>
                        <div className="post__content">
                            <p className="post__poster">Amier Faudzi</p>
                            <p>Where is the best boba place in Montreal?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}