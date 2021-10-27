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
    <div className="outerCountyContainer">
      <div className="countyStatsSection">
        <CountyStatsContainer 
          title={"Los Angeles"}
          stat1={"1232824"}
          stat2={"81312"}
        />
        <CountyStatsContainer 
          title={"San Bernardino"}
          stat1={"328374"}
          stat2={"21839"}
        />
        <CountyStatsContainer 
          title={"Santa Barbara"}
          stat1={"238291"}
          stat2={"15327"}
        />
        <CountyStatsContainer 
          title={"Los Angeles"}
          stat1={"1232824"}
          stat2={"81312"}
        />
        <CountyStatsContainer 
          title={"San Bernardino"}
          stat1={"328374"}
          stat2={"21839"}
        />
        <CountyStatsContainer 
          title={"Santa Barbara"}
          stat1={"238291"}
          stat2={"15327"}
        />
        <CountyStatsContainer 
          title={"Los Angeles"}
          stat1={"1232824"}
          stat2={"81312"}
        />
        <CountyStatsContainer 
          title={"San Bernardino"}
          stat1={"328374"}
          stat2={"21839"}
        />
        <CountyStatsContainer 
          title={"Santa Barbara"}
          stat1={"238291"}
          stat2={"15327"}
        />
        <CountyStatsContainer 
          title={"Los Angeles"}
          stat1={"1232824"}
          stat2={"81312"}
        />
        <CountyStatsContainer 
          title={"San Bernardino"}
          stat1={"328374"}
          stat2={"21839"}
        />
        <CountyStatsContainer 
          title={"Santa Barbara"}
          stat1={"238291"}
          stat2={"15327"}
        />
        <CountyStatsContainer 
          title={"Los Angeles"}
          stat1={"1232824"}
          stat2={"81312"}
        />
        <CountyStatsContainer 
          title={"San Bernardino"}
          stat1={"328374"}
          stat2={"21839"}
        />
        <CountyStatsContainer 
          title={"Santa Barbara"}
          stat1={"238291"}
          stat2={"15327"}
        />
      </div>
      {/* <div className="scrollbar"></div> */}
    </div>
  )
}
