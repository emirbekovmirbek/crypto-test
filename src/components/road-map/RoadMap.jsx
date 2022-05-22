import React from 'react';
import './road-map.scss'
import TitleDesc from '../title-desc/TitleDesc';
import Date from '../date/Date';
const RoadMap = () => {
  return (
    <div className="road-map container-sm">
      <div className="road-map__top">
        <TitleDesc
          text="04. ROADMAP"
          title="Implementation Sheet"
          desc="At Lymcoin we have one focus -
          creating a viable data marketplace to start
          returning value to token holders in the shortest time possible."
        />
      </div>
      <div className="road-map__date">
        <div className="road-map__date-top">
          <Date date="November 2017"/>
          <Date date="March 2018" text="Tracking services for different smart contract types"/>
          <Date date="May 2020" text="Release of a decentralized app for affiliate networks"/>
        </div>
        <div className="road-map__date-image">
          <img src="/assets/line-date.svg" alt="Time"/>
        </div>
        <div className="road-map__date-bottom">
          <Date date="January 2018" text="Development of different types of smart contracts (CPA, CPL, CPC, CPS, CPI)"/>
          <Date date="March 2019" text="Release of a decentralized app for merchants / affiliates"/>
          <Date date="September 2020" text="Launch of the world's first decentralized affiliate network based on the HOQU platform"/>
        </div>
      </div>
      <div className="road-map__date--mobile">
        <div className="road-map__date-image">
          <img src="/assets/date-mobile.svg" alt="Date"/>
        </div>
        <div className="road-map__dates">
          <Date date="November 2017"/>
          <Date date="January 2018" text="Development of different types of smart contracts (CPA, CPL, CPC, CPS, CPI)"/>
          <Date date="March 2018" text="Tracking services for different smart contract types"/>
          <Date date="March 2019" text="Release of a decentralized app for merchants / affiliates"/>
          <Date date="May 2020" text="Release of a decentralized app for affiliate networks"/>
          <Date date="September 2020" text="Launch of the world's first decentralized affiliate network based on the HOQU platform"/>

        </div>
      </div>
    </div>
  );
};

export default RoadMap;