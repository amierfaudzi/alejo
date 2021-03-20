import React from 'react';
import './Resources.scss';
import { gql, useQuery } from '@apollo/client';
import Post from '../../components/Post/Post';

const QUESTIONS_QUERY = gql`
    query {
        allQuestions {
            content,
            _id,
            date
        }
    }
`

export default function Resources() {

    const {loading, error, data} = useQuery(QUESTIONS_QUERY);

    if(data){
        console.log(data, loading, error);
    }

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
                    {data ? 
                        data.allQuestions.map(data => {
                            return (
                                <Post post={data}/>
                            )
                        })
                    : "Be the first to initiate the conversation"}
                </div>
            </div>
        </div>
    )
}