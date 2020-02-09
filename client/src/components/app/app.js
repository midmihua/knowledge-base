import React from 'react';

import Header from '../header';
import Content from '../content';
import Footer from '../footer';

import './app.css';

const App = () => {

    return (
        <div className='ui container app-top-margin'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
