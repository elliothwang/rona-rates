import './StatsSection.css';
import React, { useEffect, useState }  from 'react';
import StatsCard from '../StatsCard/StatsCard';
const axios = require('axios').default;

export default function StatsSection() {
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

  return (
    <div className="statsSection flex-ctr-ctr">
      <StatsCard 
        title={"Cases"}
        stat1={usData[3]?.val}
        stat2={usData[4]?.val}
      />
      <StatsCard 
        title={"Deaths"}
        stat1={usData[5]?.val}
        stat2={usData[6]?.val}
      />
      <StatsCard 
        title={"Recoveries"}
        stat1={usData[7]?.val}
        stat2={usData[8]?.val}
      />
    </div>
  )
}
