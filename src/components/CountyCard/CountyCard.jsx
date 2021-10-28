import './CountyCard.css';
import React from 'react';
import * as help from '../../utilities/helper-functions';

export default function CountyCard({ title, stat1, idx, casesShown }) {
  return (
    <div className="countyCard flex-ctr-ctr">
      <div className={idx < 3 ? "countyIdx red flex-ctr-ctr" : "countyIdx flex-ctr-ctr"}>{idx + 1}.</div>
      <div className="countyName flex-ctr-ctr">{title}</div>
      <div className={ casesShown ? "countyCasesStat flex-ctr-ctr" : "countyDeathsStat red flex-ctr-ctr"}>{help.addCommas(stat1)}</div>
    </div>
  )
}