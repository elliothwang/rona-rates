import './StatsContainer.css';
import React from 'react';
import moment from 'moment';
import * as help from '../../utilities/helper-functions';

export default function StatsContainer({ title, stat1, stat2 }) {
  let yesterday = moment().subtract(1, 'days').format('l'); 

  return (
    <div className="statsContainer flex-ctr-ctr">
      <div className="title">{title}</div>
      <div className="totalStat">{help.addCommas(stat1)}</div>
      <div className="newStatContainer flex-ctr-ctr">
        <div className="newStat">+{help.addCommas(stat2)}</div>
        <div className="newDate">&nbsp; ({yesterday})</div>
      </div>
    </div>
  )
}