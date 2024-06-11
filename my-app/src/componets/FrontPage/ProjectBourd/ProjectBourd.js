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

            <Project image='PAPERTRADERS' title='Paper Traders' 
            subtext="A live project (not any more) that pulls current crypto currency data and makes a fully functioning exchange that you can access. I ran the website locally.
                on an old business computer so I could learn how to set up networks. And have my own space where I can post projects without greedy hosting services taking my money.
                This project took some time and sweat to complete, but I'm proud of how it turned out." 
            topic='JavaScript HTML CSS node.Js JAVA SpringBoot JWT MySql' 
            link='https://github.com/KevinKohutek04/PaperTrades'/>
            
            <Project image='KevinKohutek' title='React Portfolio' 
            subtext='My source code for this project is public, so anyone can see how these components were built. Check it out here.' 
            topic='React JavaScript Router CSS HTML' 
            link='https://github.com/KevinKohutek04/ReactPortfolio'/>


       </div>
    );
};
//fixes
export default ProjectBourd;
