import React from 'react';

import CategoryLinkDetails from '../category-link-details';

import './category-links-list.css';


const CategoryLinksList = () => {
    return (
        <div>
            <div class="row">
                <div class="col top-menu-padding">Links & Details</div>
            </div>
            <CategoryLinkDetails />
            <CategoryLinkDetails />
            <CategoryLinkDetails />
            <CategoryLinkDetails />
            <CategoryLinkDetails />
            <CategoryLinkDetails />
        </div>
    );
};

export default CategoryLinksList;