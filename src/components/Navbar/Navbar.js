import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar({token, setToken}) {

    const history = useHistory();

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
                {(!token.token) ?
                <>                 
                <Link className="link" to='/login'><button className="navbar__auth">Sign In</button></Link>
                <Link className="link" to='/signup'><button className="navbar__auth">Sign Up</button></Link>
                </>
                : 
                <>
                <Link className="link" to={{
                    pathname:'/profile',
                    state:{
                        userId: token.user._id
                    }
                    }} >User X</Link>
                    <button onClick={()=> {
                        setToken('')
                        localStorage.removeItem("AUTH_TOKEN");
                        history.push('/');
                    }}>Sign Out</button>
                </>
                }
                </div>
            </div>

            
        </nav>
    )
}
