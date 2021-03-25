import React, { useState } from 'react';
import './Login.scss';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import Loading from '../../assets/icons/loading.gif';
import SignIn from '../../assets/images/team-fredi.jpg';
import { Link } from 'react-router-dom';


const USER_LOGIN = gql`
mutation Login($email: String! $password: String!){
    login(loginInput: {email: $email, password: $password}){
        token,
        user {
            _id,
            firstName,
            lastName,
            email
        }
    }
}`

export default function Login({setToken}) {

    // create a controlled form
    const [state, setState] = useState({
        password: '',
        email: ''
    })

    const history = useHistory();

    const [login, { loading, error }] = useMutation(USER_LOGIN, {variables: {
        email: state.email,
        password: state.password
    }, onCompleted: (data)=> {
        setToken(data.login);
        localStorage.setItem("AUTH_TOKEN", data.login.token)
        history.push({
            pathname:`/profile`,
            state: {
                data: data
            }
        })
    }, onError: (message) => {console.log(message)}});

    // add token to the local storage

    return (
        <div className="login">
            <div className="sign-in">
                    <div className="sign-in-header">
                        <h1 className="sign-in-header__main">Alejo</h1>
                        <p className="sign-in-header__title">Welcome Back</p>
                        <p className="sign-in-header__subtitle">Log in to your account to continue participating in the community</p>
                    </div>
                        {!loading ? 
                        <div>
                            <div className="login-input">
                                <label className="login-input__label" htmlFor="">Email</label>
                                <input className="login-input__input" type="text" name="email" id="email" placeholder="john.doe@mail.com" value={state.email} onChange={(event)=> {
                                    setState({...state, email: event.target.value})
                                }}/>
                            </div>
                            <div className="login-input">
                                <label htmlFor="" className="login-input__label">Password</label>
                                <input type="password" className="login-input__input" name="password" id="password" placeholder="password" value={state.password} onChange={(event) => {
                                    setState({...state, password: event.target.value})
                                }}/>
                            </div>
                        <button onClick={login} className="button button--signin"
                            >Sign In</button>

                            </div>
                            :
                            <img src={Loading} alt=""/>
                            }
                            <div className="sign-in__footnote">
                                <p >Dont have an account yet? <span className="portal"><Link className="portal__link" to='/signup'>Sign Up</Link></span></p>
                            </div>
               
            </div>
            <div className="login-right">
                <img className="login__image" src={SignIn} alt=""/>
            </div>
        </div>
    )
}
