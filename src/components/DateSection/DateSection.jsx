import './DateSection.css';
import React from 'react';
import moment from 'moment';

export default function DateSection({ onDashboard }) {
  let yesterday = moment().subtract(1, 'days').format('l'); 

  return (
    <div className="dateSection marquee flex-ctr-ctr">
      <div className="marqueeText flex-ctr-ctr">
        <div className="yesterdayText">Updated as of: &nbsp;</div>
        {!onDashboard ? 
          <div className="yesterdayDate">{yesterday}</div>
        :
          <div className="yesterdayDate">{yesterday}&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;</div>
        }
          <div className="apiInfo">
            <div>
              <i>&nbsp;(data from &nbsp;
                <a href="https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest" target="_blank" rel="noopener noreferrer">
                  NovelCOVID API
                </a>
                )</i>
            </div>
          </div>
      </div>
    </div>
  )
}