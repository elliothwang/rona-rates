import './StatsCard.css';
import React from 'react';
import moment from 'moment';
import * as help from '../../utilities/helper-functions';

export default function StatsCard({ title, stat1, stat2 }) {
  let yesterday = moment().subtract(1, 'days').format('l'); 

  return (
    <div className="statsCard flex-ctr-ctr">
      <div className="statTitle flex-ctr-ctr">{title}</div>
      <div className="totalStat flex-ctr-ctr">{help.addCommas(stat1)}</div>
      <div className="newStatContainer flex-ctr-ctr">
        <div className="newStat flex-ctr-ctr">+{help.addCommas(stat2)}</div>
        <div className="newDate flex-ctr-ctr">&nbsp;(from {yesterday})</div>
      </div>
    </div>
  )
}