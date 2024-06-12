import React from "react";
import "./JobBourd.css";
import Job from "./Job";

const JobBourd = () => {
    return (
      <div className="JobBourd" id="experiences">
        <Job link="https://homedepot.com" types="Java SpringBoot MySQL JWT" title="Entry Software Engineer" 
        subtext={<span>* Built and maintained components across Home Depot servers, allowing associates to easily and securely access the server through protected API endpoints.
          <br /><br />* Worked closely with other developers to roll out new software and major changes, resulting in a significantly improved system for tracking items and tools, which had a positive impact on store operations and shrinkage.</span>} 
        date="2022 - present" 
      />

        <Job link="https://homedepot.com" types="SpringBoot Java" title="Home Depot Intership Program" subtext={<span>I spent my time learning about the modern production life cycle,
           and how the code is deployed across all of the stores servers, and the different roles within a development team work and what there tasks are this was a incredbile experince to have.</span>} date="2022 - 2022" />
        

        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="TextCapp">
        View Resume
      </a>
        
        
      </div>
    );
};

export default JobBourd;