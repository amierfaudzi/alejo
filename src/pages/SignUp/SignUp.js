import React, { useState } from 'react';
import './SignUp.scss';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';

const USER_SIGNUP = gql`
    mutation SignUp($firstName: String!, $lastName: String!, $email: String!, $password: String){
        signup(signupInput: {firstName: $firstName, lastName: $lastName, email: $email, password: $password}){
            token,
            user {
                _id
            }
        }
    }
`

export default function SignUp() {

    // create a controlled form
    const [state, setState] = useState({
        password: '',
        confirmPassword: '',
        email: '',
        firstName: '',
        lastName: ''
    })

    const history = useHistory();

    const [signup] = useMutation(USER_SIGNUP, { variables: {
        password: state.password,
        email: state.email,
        firstName: state.firstName,
        lastName: state.lastName
    }, onCompleted: (data) => {
        console.log("Hey");
        console.log(data);
        setState({
            password: '',
            confirmPassword: '',
            email: '',
            firstName: '',
            lastName: ''
        })

    }})

    return (
        <div className="signup">
            <div className="sign-up">
                <h1>Alejo</h1>
                <div>
                    <h4>Sign Up</h4>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" placeholder="First name" value={state.firstName} onChange={(event)=> {
                            setState({...state, firstName: event.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" placeholder="Last name" value={state.lastName} onChange={(event)=> {
                            setState({...state, lastName: event.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="email" placeholder="Email" value={state.email} onChange={(event)=> {
                            setState({...state, email: event.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="password" placeholder="Password" value={state.password} onChange={(event)=> {
                            setState({...state, password: event.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="password" placeholder="Confirm Password" value={state.confirmPassword} onChange={(event)=> {
                            setState({...state, confirmPassword: event.target.value})}}/>
                    </div>
                    <button onClick={()=>{
                        if(state.password === state.confirmPassword){
                            signup();
                        } else {
                            alert("Password does not match")
                        }
                    }}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
