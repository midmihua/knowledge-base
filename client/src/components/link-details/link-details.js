import React from 'react';

import './link-details.css';

const LinkDetails = () => {

    return (
        <table class="ui basic table">
            <thead>
                <tr>
                    <th><i class="edit outline icon"></i></th>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="collapsing"></td>
                    <td>Property name 1</td>
                    <td>value data 1</td>
                </tr>
                <tr>
                    <td class="collapsing"></td>
                    <td>Property name 2</td>
                    <td>value data 2</td>
                </tr>
            </tbody>
        </table>
    );
}

export default LinkDetails;