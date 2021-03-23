import React, { useState } from 'react';
import './PostForm.scss';
import { gql, useMutation } from '@apollo/client';
import { QUESTIONS_QUERY } from '../../pages/Resources/Resources';

const ADD_QUESTION = gql`
    mutation AddQuestion($content: String!){
        addQuestion(questionInput: {content: $content}){
            content
        }
    }
`

export default function PostForm({setToken}) {

    const [question, setQuestion] = useState('')

    const [newQuestion] = useMutation(ADD_QUESTION, { variables: {
        content: question
    }, refetchQueries: [
        {query: QUESTIONS_QUERY}
    ], onCompleted: (data)=>{
        setQuestion('');
        setToken(data.signup);
        localStorage.setItem("AUTH_TOKEN", data.signup.token);
    }})

    return (
        <div className="post-form">
            <img src="http://placekitten.com/80/80" alt="" className="post-form__image"/>
            <div className="post-form__container">
                <p className="post-form__user">Oluwakemi Adeleke</p>
                <div>
                    <div>
                        <label htmlFor="form-content"></label>
                        <input className="post-form__input" type="text" placeholder="Ask a question or share a post" id="form-content" value={question} onChange={(event)=>{
                            setQuestion(event.target.value)}}/>
                    </div>
                    <button className="btn" onClick={newQuestion}>Submit</button>
                </div>
            </div>
        </div>
    )
}
