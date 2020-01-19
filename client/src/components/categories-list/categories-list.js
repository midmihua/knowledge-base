import React from 'react';

import Category from '../category';

import './categories-list.css';

const CategoriesList = () => {
    return (
        <div className="categories-margin">
            <ul className="list-group list-group-flush">
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </ul>
        </div>
    )
};

export default CategoriesList;

