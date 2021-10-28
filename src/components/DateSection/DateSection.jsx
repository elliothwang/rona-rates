import './DateSection.css';
import React from 'react';
import moment from 'moment';

export default function DateSection() {
  let yesterday = moment().subtract(1, 'days').format('l'); 

  return (
    <div className="dateSection marquee flex-ctr-ctr">
      <div className="marqueeText flex-ctr-ctr">
        <div className="yesterdayText">Updated as of: &nbsp;</div>
        <div className="yesterdayDate">{yesterday}</div>
        <div className="apiInfo"> &nbsp; <i>(data from NovelCOVID API)</i></div>
      </div>
    </div>
  )
}