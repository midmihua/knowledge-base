import React from 'react';

import Menu from '../menu';
import DetailsList from '../details-list';

import './content.css';

const Content = () => {

    return (
        <div className="ui grid">
            <div className="four wide column">
                <Menu />
            </div>
            <div className="twelve wide column">
                <DetailsList />
            </div>
        </div>
    )
};

export default Content;
