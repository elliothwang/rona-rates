import './DateSection.css';
import React from 'react';
import moment from 'moment';

export default function DateSection({ onDashboard }) {
  let yesterday = moment().subtract(1, 'days').format('l'); 

  return (
    <div className="dateSection marquee flex-ctr-ctr">
      <div className="marqueeText flex-ctr-ctr">
        <div className="yesterdayText">Updated as of: &nbsp;</div>
        <div className="yesterdayDate">{yesterday}</div>
        { onDashboard ?
          <div className="apiInfo">
            <div>
              <i>(data from NovelCOVID API)</i>
            </div>
            <div>
              <a href="https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest" target="_blank" rel="noopener noreferrer">
                NovelCOVID API
              </a>
            </div>
          </div>
        :
          <div className="apiInfo">&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;<i>(data from NovelCOVID API)</i></div>
        }
      </div>
    </div>
  )
}