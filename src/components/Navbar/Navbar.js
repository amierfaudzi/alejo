import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar({token, setToken}) {

    const history = useHistory();

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <Link className="link" to='/'><p className="navbar__item navbar__item--home">Alejo</p></Link>
            </div>
            
            <div className="navbar__right">
                <div className="navbar__lists">
                    <Link className="link" to='/users'><p className="navbar__item">Users</p></Link>
                    <Link className="link" to='/resources'><p className="navbar__item">Resources</p></Link>
                </div>
                <div className="navbar__auth">
                {(!token.token) ?
                <>                 
                <Link className="link" to='/login'><button className="navbar__btn">Log In</button></Link>
                <Link className="link" to='/signup'><button className="navbar__btn navbar__btn--secondary">Join Community</button></Link>
                </>
                : 
                <div className="navbar__right">
                <Link className="link" to={{
                    pathname:'/profile',
                    state:{
                        userId: token.user._id
                    }
                    }}>
                    <p className="navbar__item">{token.user.firstName}</p></Link>
                    <button className="navbar__btn navbar__btn--special" onClick={()=> {
                        setToken('')
                        localStorage.removeItem("AUTH_TOKEN");
                        history.push('/');
                    }}>Sign Out</button>
                </div>
                }
                </div>
            </div>

            
        </nav>
    )
}
