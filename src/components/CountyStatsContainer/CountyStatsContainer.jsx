import './CountyStatsContainer.css';
import React from 'react';
import * as help from '../../utilities/helper-functions';
// import * as api from '../../utilities/covid-api';

export default function CountyStatsContainer({ title, stat1, stat2 }) {

  return (
    <div className="countyStatsContainer flex-ctr-ctr">
      {/* <div className="title">{title}</div> */}
      <div className="title">County Name</div>
      {/* <div className="totalStat">{help.addCommas(stat1)}</div> */}
      <div className="totalStat">{help.addCommas(129382)}</div>
    </div>
  )
}