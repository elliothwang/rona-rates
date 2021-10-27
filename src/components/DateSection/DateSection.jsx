import './DateSection.css';
import React from 'react';
import moment from 'moment';

export default function DateSection() {
  let yesterday = moment().subtract(1, 'days').format('l'); 

  return (
    <div className="dateSection flex-ctr-ctr">
      <div className="yesterdayText">Updated as of:</div>
      <div className="yesterdayDate">{yesterday}</div>
      <div className="apiInfo">data from NovelCOVID API</div>
    </div>
  )
}