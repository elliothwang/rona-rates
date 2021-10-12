import './StatsContainer.css';
import React from 'react';
import moment from 'moment';
import * as help from '../../utilities/helper-functions';
// import * as api from '../../utilities/covid-api';

export default function StatsContainer({ title, stat1, stat2 }) {
  let yesterday = moment().subtract(1, 'days').format('l'); 

  return (
    <div className="statsContainer flex-ctr-ctr">
      {/* <div className="title">{title}</div> */}
      <div className="statTitle">Title</div>
      {/* <div className="totalStat">{help.numberWithCommas(stat1)}</div> */}
      <div className="totalStat">{help.numberWithCommas(1209381)}</div>
      <div className="newStatContainer flex-ctr-ctr">
        {/* <div>+{help.numberWithCommas(stat2)}</div> */}
        <div className="newStat">+{help.numberWithCommas(12523)}</div>
        <div className="newDate">&nbsp; ({yesterday})</div>
      </div>
    </div>
  )
}