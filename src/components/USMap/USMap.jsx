import './USMap.css';
import React  from 'react';
import { useHistory } from 'react-router-dom';
import USAMap from 'react-usa-map';
import * as help from '../../utilities/helper-functions';
import {states} from '../../assets/states-object.js';

export default function USMap() {
  const history = useHistory();

  function handleMapClick(evt) {
    const stateAbr = evt.target.dataset.name;
    const state = states[stateAbr]
    localStorage.setItem('storageStateName', state);
    history.push(`/stats/${state}`);
  }

  return (
    <div className="mapOuterContainer">
      <div className="mapInnerContainer">
        <USAMap className="USAMap"customize={help.customizeStates()} onClick={handleMapClick}/>
      </div>
    </div>
  )
}