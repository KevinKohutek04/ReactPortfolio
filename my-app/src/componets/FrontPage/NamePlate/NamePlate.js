import React from "react";
import "./NamePlate.css";
import ScrollTracker from "../../Utility/ScrollTracker";

const NamePlate = () => {
    return (
      <div className='NamePlateBox'>
        
        <p className="title">Kevin Kohutek</p>
        <p className="subtitle">Full Stack Engineer</p>
        <p className="description">I build high-quality Java microservices,<br /> and incredible UI/UX designs.</p>
      
        <ScrollTracker />
      </div>
    );
  };
  
  export default NamePlate;
  /*<a href="https://your-link-here.com" className="title">Kevin Kohutek</a> */
  /*title  subtitle  description*/