import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link className="link" to='/'>Alejo</Link>
            <Link className="link" to='/guides'>Guides</Link>
            <Link className="link" to='/resources'>Resources</Link>
        </nav>
    )
}
