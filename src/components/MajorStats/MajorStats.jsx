import './MajorStats.css';
import React, { useEffect, useState }  from 'react';
import moment from 'moment';
const axios = require('axios').default;

export default function MajorStats() {
  let yesterday = moment().subtract(1, 'days').format('l'); 
  const [USData, setUSData] = useState("");

  function numberWithCommas(x) {
    if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else return null;
  }

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

  return (
      <div className="info">
        <div className="cases">
          <div className="title">Cases</div>
          <div className="totalCases">{numberWithCommas(USData.cases)}</div>
          <div className="newCases flex-ctr-ctr">
            <div>+{numberWithCommas(USData.todayCases)}</div>
            <div className="newDate">&nbsp; ({yesterday})</div>
          </div>
        </div>
        <div className="deaths">
          <div className="title">Deaths</div>
          <div className="totalDeaths">{numberWithCommas(USData.deaths)}</div>
          <div className="newDeaths flex-ctr-ctr">
            <div>+{numberWithCommas(USData.todayDeaths)}</div>
            <div className="newDate">&nbsp; ({yesterday})</div>
          </div>
        </div>
        <div className="recoveries">
          <div className="title">Recoveries</div>
          <div className="totalRecoveries">{numberWithCommas(USData.recovered)}</div>
          <div className="newRecoveries flex-ctr-ctr">
            <div>+{numberWithCommas(USData.todayRecovered)}</div>
            <div className="newDate">&nbsp; ({yesterday})</div>
          </div>
        </div>
      </div>
  )
}
