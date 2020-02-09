import React from 'react';

import './header.css';

const Header = () => {

    return (
        <div className="ui pointing menu">
            <a className="item active" href="/">Links</a>
            <a className="item" href="/">Todos</a>
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="Search..." />
                        <i className="search link icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
