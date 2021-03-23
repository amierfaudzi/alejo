import React from 'react';
import './Resources.scss';
import { gql, useQuery } from '@apollo/client';
import Post from '../../components/Post/Post';
import PostForm from '../../components/PostForm/PostForm';
import Loading from '../../assets/icons/loading.gif'

export const QUESTIONS_QUERY = gql`
    query {
        allQuestions {
            content,
            _id,
            date
        }
    }
`;

export default function Resources() {

    let {loading, error, data} = useQuery(QUESTIONS_QUERY);
    let sortedData = []

    if(data){
        console.log(data, loading, error);
        data.allQuestions.map(data => {
            sortedData.push(data)
        })

        sortedData.sort((a,b) => b.date-a.date);
        console.log(sortedData);
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
                <PostForm/>
                <div className="community-post">
                    {!loading ? 
                        sortedData.map(data => {
                            return (
                                <Post key={data._id} post={data}/>
                            )
                        })
                    : <img src={Loading} alt=""/>}
                </div>
            </div>
        </div>
    )
}