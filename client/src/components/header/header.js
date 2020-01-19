import React from 'react';

import HeaderMenu from '../header-menu';
import Login from '../forms/login';

import './header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light header-margin">
            <a className="navbar-brand" href="/">Knowledge base</a>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <HeaderMenu />
                <Login />
            </div>
        </nav>
    );
};

export default Header;