import './Map.css';
import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import USAMap from 'react-usa-map';
import * as help from '../../utilities/helper-functions';
import {states} from '../../assets/states-object.js';

export default function Map({ onDashboard }) {
  const [legendShown, setLegendShown] = useState(true);
  const history = useHistory();

  function handleMapClick(evt) {
    const stateAbr = evt.target.dataset.name;
    const state = states[stateAbr]
    localStorage.setItem('storageStateName', state);
    history.push(`/${state}`);
  }

  function handleLegendClick() {
    if (legendShown) {
      document.querySelector(".mapLegend").classList.add('hidden');
      setLegendShown(false);
    } else {
      document.querySelector(".mapLegend").classList.remove('hidden');
      setLegendShown(true);
    }
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
        <div className="mapLegendTitle"><b>Legend (Total Cases)</b></div>
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
              <div>0 - 275,000</div>
            </div>
          :
            <div className="mapLegendText">
              <div>5</div>
              <div>4</div>
              <div>3</div>
              <div>2</div>
              <div>1</div>
              <div>0</div>
            </div>
          }
        </div>
      </div>
      { onDashboard ? 
        <USAMap className="flex-ctr-ctr" customize={help.customizeStates()} onClick={handleMapClick}/>
      :
        <div>placeholder for state map</div>
      }
    </div>
  )
}