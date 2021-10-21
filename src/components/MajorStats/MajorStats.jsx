import './MajorStats.css';
import React, { useEffect, useState }  from 'react';
import StatsContainer from '../StatsContainer/StatsContainer';
// import * as api from '../../utilities/covid-api';
const axios = require('axios').default;

export default function MajorStats() {
  const [usData, setUsData] = useState([]);

  function getUSData() {
    axios.get('https://corona.lmao.ninja/v2/countries/USA?yesterday=true&strict=true&query')
    .then(res => {
      const data = Object.entries(res.data).map(([stat, val]) => ({stat, val}));
      setUsData(data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => getUSData(), []);

  // useEffect(() => {
  //   setUSData(api.getUSData());
  // }, []);

  console.log(usData);

  return (
    <div className="majorStatsContainer">
      <StatsContainer 
        title={"Cases"}
        stat1={usData[3]?.val || ""}
        stat2={usData[4]?.val || ""}
      />
      <StatsContainer 
        title={"Deaths"}
        stat1={usData[5]?.val || ""}
        stat2={usData[6]?.val || ""}
      />
      {/* <StatsContainer 
        title={"Recoveries"}
        stat1={usData[7]?.val || ""}
        stat2={usData[8]?.val || ""}
      /> */}
    </div>
  )
}
