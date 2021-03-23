import React, { useState } from 'react';
import './Login.scss';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import Loading from '../../assets/icons/loading.gif'

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
        console.log(data.login)
        localStorage.setItem("AUTH_TOKEN", data.login.token)
        history.push({
            pathname:`/profile`,
            state: {
                data: data
            }
        })
    }, onError: () => {alert(error)}});

    // add token to the local storage

    return (
        <div className="login">
            <div className="sign-in">
                <div>
                    <h4>Sign in</h4>
                <h1>Alejo</h1>
                {!loading ? 
                <>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" name="email" id="email" placeholder="email" value={state.email} onChange={(event)=> {
                            setState({...state, email: event.target.value})
                        }}/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="password" name="password" id="password" placeholder="password" value={state.password} onChange={(event) => {
                            setState({...state, password: event.target.value})
                        }}/>
                    </div>
                <button onClick={login}
                    >Sign In</button>
                    </>
                    :
                    <img src={Loading} alt=""/>
                    }
                </div>
            </div>
        </div>
    )
}
