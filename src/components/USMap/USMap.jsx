import './USMap.css';
import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
const axios = require('axios').default;

export default function USMap() {
  const history = useHistory();
  const [stateData, setStateData] = useState("");

  function getStateData(stateName) {
    axios.get(`https://corona.lmao.ninja/v2/states/${stateName}?yesterday=true`)
    .then(res => {
      setStateData(res.data);
      history.push("/stats");
    })
    .catch(err => {
      console.log(err);
    });
  };

  function getStateInfo(evt) {
    // both className & value work here!
    const stateName = evt.target.className;
    // const state = evt.target.value;
    getStateData(stateName);
  }

  return (
    <div className="mapContainer">
      <button className="Alabama" value="Alabama" onClick={getStateInfo}>Alabama</button>
      <button className="Alaska" onClick={getStateInfo}>Alaska</button>
      <button className="Arizona" onClick={getStateInfo}>Arizona</button>
      <button className="Arkansas" onClick={getStateInfo}>Arkansas</button>
      <button className="California" onClick={getStateInfo}>California</button>
    </div>
  )
}