import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.scss';

export default function Header({token, setToken}) {
    return (
        <header>
            <Navbar token={token} setToken={setToken}/>
        </header>
    )
}
