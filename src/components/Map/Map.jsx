import './Map.css';
import React, { useState }  from 'react';
import MapChart from '../MapChart/MapChart';
import ReactTooltip from "react-tooltip";
import { useHistory } from 'react-router-dom';
import USAMap from 'react-usa-map';
import {states} from '../../assets/states-object.js';
import * as help from '../../utilities/helper-functions';
var zoom = 1;

export default function Map({ onDashboard, user }) {
  const [content, setContent] = useState("");
  const [legendShown, setLegendShown] = useState(true);
  const history = useHistory();

  function handleMapClick(evt) {
    const stateAbr = evt.target.dataset.name;
    const state = states[stateAbr]
    localStorage.setItem('storageStateName', state);
    history.push(`/${state}`);
  };

  function handleLegendClick() {
    if (legendShown) {
      document.querySelector(".mapLegend").classList.add('hidden');
      setLegendShown(false);
    } else {
      document.querySelector(".mapLegend").classList.remove('hidden');
      setLegendShown(true);
    };
  };

  function handleZoomInClick() {
    if (zoom <= 1.5) zoom += 0.1;
    onDashboard && (document.querySelector(".usaMap").style.transform = `scale(${zoom})`);
  };

  function handleZoomOutClick() {
    if (zoom >= 0.5) zoom -= 0.1;
    onDashboard && (document.querySelector(".usaMap").style.transform = `scale(${zoom})`);

  };

  function resetZoomClick() {
    zoom = 1;
    onDashboard && (document.querySelector(".usaMap").style.transform = `scale(${zoom})`);
  }

  return (
    <div className="mapContainer flex-ctr-ctr">
      <div className="openMapLegendIcon flex-ctr-ctr" onClick={handleLegendClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="2vh" height="2vh" fill="currentColor" className="bi bi-layout-text-sidebar-reverse" viewBox="0 0 16 16">
        <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"/>
      </svg>
      </div>
      <div className="mapLegend flex-ctr-ctr">
        <div className="closeMapLegendIcon" onClick={handleLegendClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="3.5vh" height="3.5vh" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
        <div className="mapLegendTitle"><b>Total Cases</b></div>
        <div className="mapLegendMainSection flex-ctr-ctr">
          <div className="mapLegendColorBoxes flex-ctr-ctr">
            <div className="blue6 firstColorBox"></div>
            <div className="blue5"></div>
            <div className="blue4"></div>
            <div className="blue3"></div>
            <div className="blue2"></div>
            <div className="blue1 lastColorBox"></div>
          </div>
          { onDashboard ? 
            <div className="mapLegendText">
              <div>4,000,001 - 5,000,000</div>
              <div>2,000,001 - 4,000,000</div>
              <div>1,000,001 - 2,000,000</div>
              <div>750,001 - 1,000,000</div>
              <div>275,001 - 750,000</div>
              <div>1 - 275,000</div>
            </div>
          : 
            <div className="mapLegendText">
              <div>250,001 - 1,500,000</div>
              <div>100,000 - 250,000</div>
              <div>25,001 - 100,000</div>
              <div>10,001 - 25,000</div>
              <div>1,001 - 10,000</div>
              <div>1 - 1,000</div>
            </div>
          }
        </div>
      </div>
      {onDashboard && (
        <div className="zoomButtons">
          <div className="zoomInButton" onClick={handleZoomInClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2vh" height="2vh" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
              <path fillRule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </div>
          <div className="zoomOutButton" onClick={handleZoomOutClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2vh" height="2vh" fill="currentColor" className="bi bi-zoom-out" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
              <path fillRule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
          <div className="resetButton" onClick={resetZoomClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2vh" height="2vh" fill="currentColor" className="bi bi-recycle" viewBox="0 0 16 16">
              <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
            </svg>
          </div>
        </div>
      )}
      { onDashboard ? 
        <div className="usaMap">
          <USAMap customize={help.customizeStates()} onClick={handleMapClick}/>
        </div>      
        :
        <>
          <MapChart user={user} onDashboard={onDashboard} setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </>      
        }
    </div>
  )
}