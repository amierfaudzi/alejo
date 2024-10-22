import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Post.scss';
import { gql, useMutation } from '@apollo/client';
import { QUESTIONS_QUERY } from '../../pages/Resources/Resources';
import FakePictureGenerator from '../FakePictureGenerator/FakePictureGenerator';

const ADD_ANSWER = gql`
    mutation AddQuestion($content: String!){
        addAnswer(answerInput: {content: $content}){
            content
        }
    }
`

export default function Post({post, token}) {

    const [reply, setReply] = useState('');

    const [newAnswer] = useMutation(ADD_ANSWER, { variables: {
        content: reply
    }, refetchQueries: [
        {query: QUESTIONS_QUERY}
    ]})

    const history = useHistory();
    const [showThread, setShowThread] = useState(false);
    const [ showReply, setShowReply] = useState(false);

    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__header">
                    <FakePictureGenerator userId={post.question.creator._id} name={(post.question.creator.guide ? "post__image post__image--guide" : "post__image")}/>
                        <p className="post__poster">{post.question.creator.name}</p>
                        <p>{timeConverter(Number(post.question.date))}</p>
                </div>
                <p className="post__content">{post.question.content}</p>

                {showReply ?
                    <div>
                        <div className="reply">
                            <input type="text" className="reply__input" placeholder="Share your thoughts"
                            value={reply}
                            onChange={(event)=>{
                                setReply(event.target.value)
                            }}/>
                        </div>
                        <button className="button button--reply" onClick={newAnswer}>Submit</button>
                    </div>
                : ""}

                <button className="button" onClick={()=>{
                    setShowThread(!showThread)
                }}>View thread</button>
                {token ? 
                    <button className="button" onClick={()=>{
                        setShowReply(!showReply)
                    }}>Reply</button>
                :
                ""}
            </div>
            {showThread ?
            <>
                {post.answers.length ?
                    <div className="replies-wrapper">                
                    {post.answers.map((answer, index)=> {
                        return (
                            <div className="replies" key={index}>
                                 <div className="post__header">
                                    <FakePictureGenerator userId={answer.creator._id} name={(answer.creator.guide ? "post__image post__image--guide" : "post__image")}/>
                                    <p onClick={()=>{
                                        history.push({
                                            pathname:`/profile`,
                                            state: {
                                                userId: answer.creator._id
                                            }
                                        })
                                    }} className="post__poster replies__poster">{answer.creator.name}</p>
                                    <p>{timeConverter(Number(answer.date))}</p>
                                </div>
                                <p>{answer.content}</p>
                            </div>
                        )
                    })}
                    </div>
                : 
                <div className="replies">
                    <p>{token ? "Be the first one to reply!" : "Login and be the first one to reply!"}</p>
                </div> }
 
            </>
            : ''}
        </div>
    )
}


function timeConverter (timeStamp) {
    const date = new Date(timeStamp);
    //changing the date into a DD/MM/YR format
    const formattedTime = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    return formattedTime;
}
