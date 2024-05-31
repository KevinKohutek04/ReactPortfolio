import React from "react";
import "./JobBourd.css";
import Job from "./Job";

const JobBourd = () => {
    return (
      <div className="JobBourd">
        <Job link="google.com" types="java css html" title="engineer" subtext="description" date="2022 - present" />
        <Job link="google.com" types="rwq" title="title" subtext="description" date="2020 - 2022" />
        
        <a href="path/to/your/pdf-file.pdf" target="_blank" rel="noopener noreferrer" className="TextCapp">View Resume </a>

        
        
      </div>
    );
};

export default JobBourd;
//aewrfef