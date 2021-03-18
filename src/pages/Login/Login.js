import React, { useState, useEffect } from 'react';
import './Login.scss';
import { gql, useLazyQuery } from '@apollo/client';
import { useHistory } from 'react-router';

const USER_LOGIN = gql`
query Login($email: String! $password: String!){
    login(loginInput: {email: $email, password: $password}){
        token,
        user {
          firstName,
          about
        }
    }
}`

export default function Login() {

    // create a controlled form
    const [state, setState] = useState({
        password: '',
        email: ''
    })

    const history = useHistory();

    const [ loginUser, { loading, data }] = useLazyQuery(USER_LOGIN);

    useEffect(()=>{

        if(data){
            localStorage.setItem("AUTH_TOKEN", data.token)
            history.push('/users')
        }
    }, [data])

    // add token to the local storage
    return (
        <div className="login">
            <div className="sign-in">
                <h1>Alejo</h1>
                <form>
                    <h4>Sign in</h4>
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
                    <button onClick={async (event) => {
                        event.preventDefault();
                        const res = await loginUser({variables: {
                            email: state.email,
                            password: state.password
                        }})
                    }
                    }
                    >Sign In</button>
                </form>
            </div>
        </div>
    )
}
