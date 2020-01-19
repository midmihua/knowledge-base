import React from 'react';

import Header from '../header';
import Search from '../forms/search';
import CategoriesList from '../categories-list';
import CategoryLinksList from '../category-links-list';

import './app.css';

const App = () => {
    return (
        <div>
            <Header />
            <div class="row body-block-margin">
                <div class="col-sm-2">
                    <Search />
                    <CategoriesList />
                </div>
                <div class="col-sm-10">
                    <CategoryLinksList />
                </div>
            </div>

        </div>
    );
};

export default App;