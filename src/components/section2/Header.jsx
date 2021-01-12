import React from 'react';
import './header.css'
import Rijwan from '../../asset/images/me.jpg'

function Header() { 
    return ( 
        <> 
            <div className="header"> 
                <h1 className="name">Rijwan Hossain</h1> 
                <img src={Rijwan} alt="Rijwan" className="header_avatar" /> 
            </div> 
        </> 
    ) 
} 

export default Header;