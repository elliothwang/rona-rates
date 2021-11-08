import './CountyCard.css';
import React from 'react';
import * as help from '../../utilities/helper-functions';

export default function CountyCard({ title, stat1, idx, casesShown }) {
  return (
    <div className="countyCard flex-ctr-ctr">
      <div className="countyIdx">{idx + 1}.</div>
      <div className="countyName">{title}</div>
      <div className={ casesShown ? "countyCasesStat" : "countyDeathsStat red flex-ctr-ctr"}>{help.addCommas(stat1)}</div>
    </div>
  )
}