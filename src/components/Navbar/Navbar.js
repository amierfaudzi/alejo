import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <Link className="link" to='/'>Alejo</Link>
            </div>
            
            <div className="navbar__right">
                <div className="navbar__lists">
                    <Link className="link" to='/users'>Users</Link>
                    <Link className="link" to='/resources'>Resources</Link>
                </div>
                <div className="navbar__auth">
                    Sign In
                </div>
            </div>

            
        </nav>
    )
}
