import React, { useState } from 'react';
import './SignUp.scss';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import Loading from '../../assets/icons/loading.gif'
import SignUpPic from '../../assets/images/joel-muniz.jpg';
import { Link } from 'react-router-dom';

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

    const [signup,  { loading, error }] = useMutation(USER_SIGNUP, { variables: {
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

    },  onError: () => {alert(error)}})

    return (
        <div className="signup">
            <div>
                <img className="signup__image" src={SignUpPic} alt=""/>
            </div>
            <div className="sign-up">
                <div className="sign-up-header">
                        {/* <h1 className="sign-up-header__main">Alejo</h1> */}
                        <p className="sign-up-header__title">Create Account</p>
                        <p className="sign-up-header__subtitle">Log in to your account to continue participating in the community</p>
                    </div>
                    {!loading ? 
                    <div>
                        <div className="name-wrapper">
                            <div className="signup-input">
                                <label htmlFor="" className="signup-input__label">First Name</label>
                                <input className="signup-input__input" type="text" placeholder="First name" value={state.firstName} onChange={(event)=> {
                            setState({...state, firstName: event.target.value})}}/>
                            </div>
                            <div className="signup-input">
                                <label htmlFor="" className="signup-input__label">Last Name</label>
                                <input className="signup-input__input" type="text"      placeholder="Last name" value={state.lastName} onChange=    {(event)=> {
                                    setState({...state, lastName: event.target.value})}}        />
                            </div>
                        </div>
                   
                    <div className="signup-input">
                        <label htmlFor="" className="signup-input__label">Email</label>
                        <input className="signup-input__input" type="email" placeholder="Email" value={state.email} onChange={(event)=> {
                            setState({...state, email: event.target.value})}}/>
                    </div>
                    <div className="signup-input">
                        <label htmlFor="" className="signup-input__label">Password</label>
                        <input className="signup-input__input" type="password" placeholder="Password" value={state.password} onChange={(event)=> {
                            setState({...state, password: event.target.value})}}/>
                    </div>
                    <div className="signup-input">
                        <label htmlFor="" className="signup-input__label">Confirm Password</label>
                        <input className="signup-input__input" type="password" placeholder="Confirm Password" value={state.confirmPassword} onChange={(event)=> {
                            setState({...state, confirmPassword: event.target.value})}}/>
                    </div>
                    <button className="button button--signup"
                    onClick={()=>{
                        if(state.password === state.confirmPassword){
                            signup();
                        } else {
                            alert("Password does not match")
                        }
                    }}>Sign Up</button>
                
                    </div>
                    :
                    <img src={Loading} alt=""/>
                    }
                    <div className="sign-up__footnote">
                        <p >Already have an account with us? <span className="portal"><Link className="portal__link" to='/login'>Login</Link></span></p>
                    </div>
            </div>
        </div>
    )
}
