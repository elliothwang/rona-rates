import React, { useState, useEffect } from 'react';
import Map from '../../components/Map/Map';
import StatsSection from '../../components/StatsSection/StatsSection';
import CountiesSection from '../../components/CountiesSection/CountiesSection';
import DateSection from '../../components/DateSection/DateSection';
const axios = require('axios').default;

export default function StatePage({ user }) {
  const [stateData, setStateData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [stateCountiesCases, setStateCountiesCases] = useState([]);
  const [stateCountiesDeaths, setStateCountiesDeaths] = useState([]);
  const state = localStorage.getItem('storageStateName');
  const onDashboard = false;

  function getStateData() {
    axios.get(`https://corona.lmao.ninja/v2/states/${state}?yesterday=true`)
    .then(res => {
      const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({stat, val}));
      setStateData(apiDataArr);
    })
    .catch(err => {
      console.log(err);
    });
  };

  function getStateCountiesData() {
    axios.get('https://corona.lmao.ninja/v2/jhucsse/counties')
    .then(res => {
      const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({stat, val}));
      const stateCountiesCases = apiDataArr.filter(el => el.val.province === `${state}`).sort((acc, curr) => curr.val.stats.confirmed - acc.val.stats.confirmed);
      setStateCountiesCases(stateCountiesCases);
      const stateCountiesDeaths = apiDataArr.filter(el => el.val.province === `${state}`).sort((acc, curr) => curr.val.stats.confirmed - acc.val.stats.confirmed);
      setStateCountiesDeaths(stateCountiesDeaths);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => getStateData(), []);
  useEffect(() => getStateCountiesData(), []);

  return (
  <div className="statePage dashboard flex-ctr-ctr">
    <div className="stats"><StatsSection onDashboard={onDashboard} sData={stateData} sChartData={chartData} /></div>
    <div className="map"><Map onDashboard={onDashboard} /></div>
    <div className="counties"><CountiesSection onDashboard={onDashboard} sCountiesCases={stateCountiesCases} sCountiesDeaths={stateCountiesDeaths} /></div>
    <div className="date"><DateSection user={user}/></div>
  </div>
  )
}
