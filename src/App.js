import React  from "react";

import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

import './app.css'

function App() { 
  return ( 
    <div className="container"> 
      <div className="s1 align"> 
        <Section1 /> 
      </div> 
      <div className="s2 align"> 
        <Section2 /> 
      </div> 
    </div> 
  ); 
} 

export default App;


