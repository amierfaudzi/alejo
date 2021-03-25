import React from 'react';
import './Resources.scss';
import { gql, useQuery } from '@apollo/client';
import Post from '../../components/Post/Post';
import PostForm from '../../components/PostForm/PostForm';
import Loading from '../../assets/icons/loading.gif'
import Networking from '../../assets/images/christina-wocintechchat.jpg';
import General from '../../assets/images/austin-distel.jpg';
import Academic from '../../assets/images/clay-banks.jpg';
import Financial from '../../assets/images/ben-duchac.jpg';

export const QUESTIONS_QUERY = gql`
    query {
        allQuestions {
            question {
                content,
                date,
                creator {
                    name,
                    _id,
                    guide
                }
            },
            answers {
                content,
                date,
                creator {
                    name,
                    _id,
                    guide
                }
            }
        }
    }
`;

export default function Resources({token}) {

    let {loading, error, data} = useQuery(QUESTIONS_QUERY);
    let sortedData = []

    if(data){
        console.log(data, loading, error);
        data.allQuestions.map(data => {
            sortedData.push(data)
        })

        sortedData.sort((a,b) => b.question.date-a.question.date);
        console.log("This is the sorted data -if any",sortedData);
    }

    return (
        <div className="resources"> 
            <div className="welcome">
                {token ? 
                <h1>Welcome, {token.user.firstName}</h1>
                :
                ''}
                
            </div>
            <div className="resources__tray">
                <div className="resource-card">
                    <img className="resource-card__image" src={General} alt="" className="resource-card__image"/>
                    <div className="resource-card__content">
                        <p>General</p>
                    </div>
                </div>
                <div className="resource-card">
                    <img className="resource-card__image" src={Academic} alt="" className="resource-card__image"/>
                    <div className="resource-card__content">
                        <p>Academic</p>
                    </div>
                </div>
                <div className="resource-card">
                    <img className="resource-card__image" src={Networking} alt="" className="resource-card__image"/>
                    <div className="resource-card__content">
                        <p>Networking</p>
                    </div>
                </div>
                <div className="resource-card">
                    <img className="resource-card__image" src={Financial} alt="" className="resource-card__image"/>
                    <div className="resource-card__content">
                        <p>Financial</p>
                    </div>
                </div>
                
            </div>
            <div>
                {token ? 
                <PostForm/>
                :
                ''
                }
                
                <div className="community-post">
                    {!loading ? 
                        sortedData.map((data, index) => {
                            return (
                                <Post key={index} post={data} token={token}/>
                            )
                        })
                    : <img src={Loading} alt=""/>}
                </div>
            </div>
        </div>
    )
}