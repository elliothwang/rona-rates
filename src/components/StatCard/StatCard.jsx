import './StatCard.css';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import * as help from '../../utilities/helper-functions';

export default function StatCard({ title, stat1, stat2, stat3, statGraph, msg1, msg2, msg3, spaced, red, guide }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleCardFlip(evt) {
    evt.preventDefault();
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} containerClassName={ spaced ? "statCard spaced" : "statCard"}>
      <div className="cardFront">
        <div className="cardHeader">
          <div className="flipButton"></div>
          <div className="flipIcon flex-ctr-ctr" onClick={handleCardFlip}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2vmin" height="2vmin" fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
            </svg>
          </div>
          <div className="cardTitle">{title}</div>
        </div>
        <div className="cardContent">
          <div className="stat1Container">
            <div className="stat1">{help.addCommas(stat1)}</div>
            {msg1 && (
              <div className="msg1">&nbsp;&nbsp;{msg1}</div>
            )}
          </div>
          { stat2 && (
            <div className="stat2Container">
              <div className="stat2">{help.addCommas(stat2)}</div>
              {msg2 && (
                <div className="msg2">&nbsp;&nbsp;{msg2}</div>
              )}
            </div>
          )}
          { stat3 && (
            <div className="stat3Container">
              <div className="plusSign">+&nbsp;</div>
              <div className={red ? "stat3 red" : "stat3 green"}>{help.addCommas(stat3)}</div>
              { msg3 && (
                <div className="msg3">&nbsp;&nbsp;{msg3}</div>          
              )}
            </div>
          )}
        </div>
      </div>
      <div className="cardBack">
        <div className="cardHeader">
          <div className="flipButton"></div>
          <div className="flipIcon flex-ctr-ctr" onClick={handleCardFlip}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2vmin" height="2vmin" fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
            </svg>
          </div>
          <div>Graph</div>
        </div>
        <div className="cardContent">
          <div className="cardGraph">

          </div>
        </div>
      </div>
    </ReactCardFlip>
  )
}