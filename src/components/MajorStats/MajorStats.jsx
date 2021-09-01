import './MajorStats.css';
import React, { useEffect, useState }  from 'react';
const axios = require('axios').default;

export default function MajorStats() {
  const [USData, setUSData] = useState("");

  function getUSData() {
    axios.get('https://corona.lmao.ninja/v2/countries/USA?yesterday=true&strict=true&query')
    .then(res => {
      const data = res.data;
      setUSData(data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => getUSData(), []);

  function numberWithCommas(x) {
    if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else return null;
  }

  return (
    <div className="parentContainer">
      <div className="info">
        <div className="cases">
          <div className="title">Cases</div>
          <div className="totalStat">{numberWithCommas(USData.cases)}</div>
          <div className="newCases">+{numberWithCommas(USData.todayCases)}</div>
        </div>
        <div className="deaths">
          <div className="title">Deaths</div>
          <div className="totalStat">{numberWithCommas(USData.deaths)}</div>
          <div className="newDeaths">+{numberWithCommas(USData.todayDeaths)}</div>
        </div>
        <div className="recoveries">
          <div className="title">Recoveries</div>
          <div className="totalStat">{numberWithCommas(USData.recovered)}</div>
          <div className="newRecoveries">+{numberWithCommas(USData.todayRecovered)}</div>
        </div>
      </div>
    </div>
  )
}
