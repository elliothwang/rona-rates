import './CountyStatsSection.css';
import React, { useEffect, useState }  from 'react';
import CountyStatsContainer from '../CountyStatsContainer/CountyStatsContainer';
const axios = require('axios').default;

export default function CountyStatsSection() {
  // const [usData, setUsData] = useState([]);

  // function getUSData() {
  //   axios.get('https://corona.lmao.ninja/v2/countries/USA?yesterday=true&strict=true&query')
  //   .then(res => {
  //     const data = Object.entries(res.data).map(([stat, val]) => ({stat, val}));
  //     setUsData(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // };

  // useEffect(() => getUSData(), []);

  return (
    <div className="countyStatsSection">
      <CountyStatsContainer />
    </div>
  )
}
