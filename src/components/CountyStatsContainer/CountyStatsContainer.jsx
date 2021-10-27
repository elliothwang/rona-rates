import './CountyStatsContainer.css';
import React from 'react';
import * as help from '../../utilities/helper-functions';

export default function CountyStatsContainer({ title, stat1, stat2 }) {
  return (
    <div className="countyStatsOuterContainer flex-ctr-ctr">
      <div className="countyStatsInnerContainer flex-ctr-ctr">
        <div className="countyName flex-ctr-ctr">{title}</div>
        <div className="countyMajorStats flex-ctr-ctr">
          <div className="countyTotalCases flex-ctr-ctr">
            <div className="countyStatTitle">Cases: &nbsp; </div>
            <div className="countyCasesStat">{help.addCommas(stat1)}</div>
          </div>
          <div className="countyTotalDeaths flex-ctr-ctr">
            <div className="countyStatTitle">Deaths: &nbsp; </div>
            <div className="countyDeathsStat">{help.addCommas(stat2)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}