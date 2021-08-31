import './MajorStats.css';
import React, { useEffect, useState }  from 'react';
import fetchNovelCOVIDAPI from '../../utilities/novelCovidAPI';
const axios = require('axios').default;

export default function MajorStats() {
  const [APIData, setAPIData] = useState("");

  function fetchNovelCOVIDAPI() {
    axios.get('https://corona.lmao.ninja/v2/countries/USA?yesterday=true&strict=true&query')
    .then(res => {
      console.log(res.data);
      const data = res.data;
      setAPIData(data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => fetchNovelCOVIDAPI(), []);

  return (
    <div className="info">
      <div className="cases">
        <div>Cases</div>
        <div style={{ color: "black" }}>{APIData.cases}</div>
        {/* <div style={{ color: "black" }}>{APIData.todayCases}</div> */}
      </div>
      <div className="deaths">
        <div>Deaths</div>
        <div style={{ color: "red" }}>{APIData.deaths}</div>
        {/* <div style={{ color: "red" }}>{APIData.todayDeaths}</div> */}
      </div>
      <div className="recoveries">
        <div>Recoveries</div>
        <div style={{ color: "green" }}>{APIData.recovered}</div>
        {/* <div style={{ color: "green" }}>{APIData.todayRecovered}</div> */}
      </div>
    </div>
  )
}
