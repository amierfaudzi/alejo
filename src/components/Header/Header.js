import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.scss';

export default function Header({token}) {
    return (
        <header>
            <Navbar token={token}/>
        </header>
    )
}
