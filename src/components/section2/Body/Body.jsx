import React from 'react';
import './body.css'

function Body(props) { 
    return ( 
        <> 
            <div className="body_head"> 
                <h2 className="subtitle">{props.subtitle}</h2> 
                <p className="view">View All</p> 
            </div> 
            <div className="blocks"> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
                <div className="block_element"></div> 
            </div> 
        </> 
    ) 
} 

export default Body;