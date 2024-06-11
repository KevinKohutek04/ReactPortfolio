import React from "react";
import './ProjectBourd.css';
import Project from './Project.js';

const ProjectBourd = () => {
    return (
       <div className="ProjectBourd" id="projects">

            <Project image='project1' title='JWT Quick Start' 
            subtext='A simple jwt spring boot guide that explains how to setup and start a jwt protected project' 
            topic='SpringBoot JWT Java' 
            link='https://github.com/KevinKohutek04/JWT_STARTER/blob/main/README.md'/>
            
            <Project image='KevinKohutek' title='React Portfolio' 
            subtext='My source code for this project is public, so anyone can see how these components were built. Check it out here.' 
            topic='React JavaScript Router CSS HTML' 
            link='https://github.com/KevinKohutek04/ReactPortfolio'/>


       </div>
    );
};
//fixes
export default ProjectBourd;
