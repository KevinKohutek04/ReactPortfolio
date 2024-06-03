import React from 'react';
import './Project.css';
import arrow from '../../assets/logo/arrow.png';

const Project = ({ image, title, subtext, topic, link }) => {
    const imagePath = require(`../../assets/img/${image}.png`);
    const topicArray = topic.split(' ');

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="ProjectLink">
            <div className="Project">
                <div className="LeftProject">
                    <img src={imagePath} alt={title} className='ProjectImg'/>
                </div>
                <div className="RightProject">
                    <p className="TextCap" style={{ fontWeight: 'bold' }}>{title}
                        <img src={arrow} alt="arrow icon" className="ArrowIcon" />
                    </p> 
                    <div className="TextSub">{subtext}</div>
                    <div className="TypesContainer">
                        {topicArray.map((topic, index) => (
                            <div key={index} className="TypeCircle">{topic}</div>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Project;
//descriptionp     
