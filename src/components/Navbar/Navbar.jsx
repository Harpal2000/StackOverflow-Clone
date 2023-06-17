import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/stacklogo.png';
import searchIcon from '../../assets/searchicon.svg';
import Avatar from '../Avatar/Avatar';

import './Navbar.css';

function Navbar() {
    let User = null;
    return (

        <nav className='main-nav'>
            <div className="nav_div">
                <Link to="/" className="nav-item main-logo">
                    <img src={logo} alt="logo" />
                </Link>
                <div className="nav-item-content">
                    <Link to="/" className="nav-item nav-link-btn hide-item">About</Link>
                    <Link to="/" className="nav-item nav-link-btn">Product</Link>
                    <Link to="/" className="nav-item nav-link-btn hide-item">For Teams</Link>
                </div>
                <form>
                    <input type="text" className="search_bar" placeholder="Search..." />
                    <img src={searchIcon} alt="search-icon" className="search-icon" width="17" />
                </form>
                {User === null ? <>
                    <Link to="/Auth" className="nav-item lg-btn">Log in</Link>
                    <Link to="/Auth" className="nav-item rg-btn">Sign up</Link>
                </> :
                    <>
                        <Link to="/Profile" style={{ textDecoration: 'none' }}><Avatar backgroundColor="blue" padding="0.3rem 0.7rem" margin="0 5px 0 0" color="#ffffff" borderRadius="3px">H</Avatar></Link>
                        <button className="logOut-btn">Log out</button>
                    </>}
            </div>
        </nav>
    )
}

export default Navbar
