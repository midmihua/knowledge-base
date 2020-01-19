
import React from 'react';

import './header-menu.css';

const HeaderMenu = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/">Links <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Todo Sheets</a>
            </li>
        </ul>
    );
};

export default HeaderMenu;