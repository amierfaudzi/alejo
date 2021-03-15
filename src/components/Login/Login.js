import React from 'react';
import './Login.scss';

export default function Login() {
    return (
        <div>
            <form className="form">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id=""/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id=""/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                </div>
            </form>
        </div>
    )
}
