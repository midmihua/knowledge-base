import React, { Fragment } from 'react';

import LinkDetails from '../link-details';

import './details-list.css';

const DetailsList = () => {

    return (
        <Fragment>
            <LinkDetails />
            <LinkDetails />
            <LinkDetails />
        </Fragment>
    );
}

export default DetailsList;