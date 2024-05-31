import React from "react";
import './Job.css';
import arrow from '../../assets/logo/arrow.png';

const Job = ({ link, types, title, subtext, date }) => {
    
    const typeArray = types.split(' ');

    return (
      <div className="JobBox">
        <div className="LeftSide">
          <p className="DateText">{date}</p>
        </div>
        <div className="RightSide">
          <p className="TextCap" style={{ fontWeight: 'bold' }}>
            {title}<img src={arrow} alt="arrow icon" className="ArrowIcon" />
          </p> 
          <div className="TextSub">{subtext}</div>
          <div className="TypesContainer">
            {typeArray.map((type, index) => (
              <div key={index} className="TypeCircle">{type}</div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Job;

//<Job link="google.com" types="java css html" title="enginerr wqaf awfd" subtext="awr  rwar ar awr awrwar awrowa rawntina l etletel eltkewtlkewntl knwe wp tnweptgnkg wegkknwepwe ntloewnt pewkn tpoewn t" date="2022 - present"/>
