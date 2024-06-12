import React from "react";
import "./StoryBourd.css";
import Spacer from "../../Utility/Spacer";
import trooperImage from "../../assets/img/image2.png";

const StoryBourd = () => {
  const customCursorStyle = {
    cursor: `url(${trooperImage}), auto`,
    color: 'rgb(219, 225, 234)',
    fontWeight: 900
};


    return (
      <div className='StoryBourd' id="about">
        <Spacer amount={1.4}/>
        <p className="descriptionp">
        &nbsp; In 2019, I began by making small Java applications in IntelliJ. Then, I took my first structured course at <a href="https://techfios.com/" target="_blank" rel="noopener noreferrer" className="no-style-link">Tech Fios,</a>
            where I learned the necessary skills for backend development. After completing the course, I applied for an internship program
            at <a href="https://www.homedepot.com" target="_blank" rel="noopener noreferrer" className="no-style-link">Home Depot,</a> where I had previously worked in the lumber department. The internship provided valuable insights into the inner 
            workings of a large-scale software. Following this experience, I joined the team as an entry-level software engineer.
            <br/><br/>
            &nbsp;In my free time, I love to lift heavy weights, play video games, and spend time with my beagle, <span className="TrooperPooper" style={customCursorStyle}>Trooper.</span> Balancing my professional life and personal life keeps me happy and ready to tackle anything.
            <br/><br/>
            </p>
      </div>
    );
};

export default StoryBourd;

  /*
  <a href="https://www.homedepot.com" target="_blank" rel="noopener noreferrer" className="no-style-link">Home Depot</a>
  <a href="https://techfios.com/" target="_blank" rel="noopener noreferrer" className="no-style-link">Tech Fios</a>
  
  */