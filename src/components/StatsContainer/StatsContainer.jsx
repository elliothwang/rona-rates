import './StatsContainer.css';
import React, { useEffect, useState }  from 'react';
import moment from 'moment';
import * as help from '../../utilities/helper-functions';
// import * as api from '../../utilities/covid-api';
const axios = require('axios').default;

export default function StatsContainer() {
  let yesterday = moment().subtract(1, 'days').format('l'); 
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

  // useEffect(() => {
  //   setUSData(api.getUSData());
  //   console.log(api.getUSData());
  // }, []);

  return (
    <div className="container">
      <div className="title">Cases</div>
      <div className="totalCases">{help.numberWithCommas(USData.cases)}</div>
      <div className="newCases flex-ctr-ctr">
        <div>+{help.numberWithCommas(USData.todayCases)}</div>
        <div className="newDate">&nbsp; ({yesterday})</div>
      </div>
    </div>
  )
}