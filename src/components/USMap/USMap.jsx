import './USMap.css';
import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import USAMap from "react-usa-map";
const axios = require('axios').default;

export default function USMap() {
  const history = useHistory();
  const [stateData, setStateData] = useState("");
  
  var states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FL": "Florida",
    "GA": "Georgia",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PA": "Pennsylvania",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
  };

  function customizeStates() {
    return {
      "AL": {fill: "#6fa8dc"},
      "AK": {fill: "#cfe2f3"},
      "AZ": {fill: "#3d85c6"},
      "AR": {fill: "#9fc5e8"},
      "CA": {fill: "#204c91"},
      "CO": {fill: "#9fc5e8"},
      "CT": {fill: "#9fc5e8"},
      "DE": {fill: "#cfe2f3"},
      "DC": {fill: "#cfe2f3"},
      "FL": {fill: "#416aab"},
      "GA": {fill: "#3d85c6"},
      "HI": {fill: "#cfe2f3"},
      "ID": {fill: "#9fc5e8"},
      "IL": {fill: "#3d85c6"},
      "IN": {fill: "#6fa8dc"},
      "IA": {fill: "#9fc5e8"},
      "KS": {fill: "#9fc5e8"},
      "KY": {fill: "#9fc5e8"},
      "LA": {fill: "#9fc5e8"},
      "ME": {fill: "#cfe2f3"},
      "MD": {fill: "#9fc5e8"},
      "MA": {fill: "#6fa8dc"},
      "MI": {fill: "#3d85c6"},
      "MN": {fill: "#9fc5e8"},
      "MS": {fill: "#9fc5e8"},
      "MO": {fill: "#6fa8dc"},
      "MT": {fill: "#cfe2f3"},
      "NE": {fill: "#9fc5e8"},
      "NV": {fill: "#9fc5e8"},
      "NH": {fill: "#cfe2f3"},
      "NJ": {fill: "#3d85c6"},
      "NM": {fill: "#cfe2f3"},
      "NY": {fill: "#416aab"},
      "NC": {fill: "#3d85c6"},
      "ND": {fill: "#cfe2f3"},
      "OH": {fill: "#3d85c6"},
      "OK": {fill: "#9fc5e8"},
      "OR": {fill: "#9fc5e8"},
      "PA": {fill: "#3d85c6"},
      "RI": {fill: "#cfe2f3"},
      "SC": {fill: "#6fa8dc"},
      "SD": {fill: "#cfe2f3"},
      "TN": {fill: "#3d85c6"},
      "TX": {fill: "#204c91"},
      "UT": {fill: "#9fc5e8"},
      "VT": {fill: "#cfe2f3"},
      "VA": {fill: "#6fa8dc"},
      "WA": {fill: "#9fc5e8"},
      "WV": {fill: "#cfe2f3"},
      "WI": {fill: "#6fa8dc"},
      "WY": {fill: "#cfe2f3"},
    };
  };

  function getStateData(stateName) {
    axios.get(`https://corona.lmao.ninja/v2/states/${stateName}?yesterday=true`)
    .then(res => {
      setStateData(res.data);
      // history.push({
      //   path: "/stats",
      //   state: setStateData,
      // });
      history.push("/stats");
    })
    .catch(err => {
      console.log(err);
    });
  };

  function getStateInfo(evt) {
    const stateName = evt.target.dataset.name;
    getStateData(states[stateName]);
  }

  return (
    <div className="mapContainer">
      <USAMap customize={customizeStates()} onClick={getStateInfo}/>
    </div>
  )
}