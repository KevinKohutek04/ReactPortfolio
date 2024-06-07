import React from "react";
import "./JobBourd.css";
import Job from "./Job";

const JobBourd = () => {
    return (
      <div className="JobBourd" id="experience">
        <Job link="https://homedepot.com" types="Java SpringBoot MySQL JWT" title="Entry Software Engineer" 
        subtext="&nbsp;Built and maintained components across Home Depot servers, allowing associates to easily and securely access the server through protected API endpoints. 
        Worked closely with other developers to roll out new software and major changes, resulting in a significantly improved system for tracking items and tools, 
        which had a positive impact on store operations and shrinkage.
          " date="2022 - present" />
        <Job link="google.com" types="rwq" title="title" subtext="description" date="2020 - 2022" />
        
        <Job link="google.com" types="java css html" title="engineer" subtext="description" date="2022 - present" />
        <Job link="google.com" types="rwq" title="title" subtext="description" date="2020 - 2022" />

        <a href="/Resume_edited.pdf" target="_blank" rel="noopener noreferrer" className="TextCapp">
        View Resume
      </a>
        
        
      </div>
    );
};

export default JobBourd;