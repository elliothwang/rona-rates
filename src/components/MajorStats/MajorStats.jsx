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

  function numberWithCommas(x) {
    if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else return null;
  }

  return (
    <div className="parentContainer">
      <div className="info">
        <div className="cases">
          <div className="title">Cases</div>
          <div className="totalStat">{numberWithCommas(APIData.cases)}</div>
          <div className="newCases">+{numberWithCommas(APIData.todayCases)}</div>
        </div>
        <div className="deaths">
          <div className="title">Deaths</div>
          <div className="totalStat">{numberWithCommas(APIData.deaths)}</div>
          <div className="newDeaths">+{numberWithCommas(APIData.todayDeaths)}</div>
        </div>
        <div className="recoveries">
          <div className="title">Recoveries</div>
          <div className="totalStat">{numberWithCommas(APIData.recovered)}</div>
          <div className="newRecoveries">+{numberWithCommas(APIData.todayRecovered)}</div>
        </div>
      </div>
    </div>
  )
}
