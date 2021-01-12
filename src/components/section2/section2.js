import React from 'react';

import Header from './Header'
import Body from './Body/Body'

import './sec2.css'

function Section2() {
    return (
        <div className="sec2_body">
            <Header /> 
            <div className="body_section">
                <Body subtitle="Employees" /> 
                <Body subtitle="Customers" /> 
            </div>
        </div>
    )
}

export default Section2;