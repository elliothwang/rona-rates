import './DashboardPage.css';
import React, { useState, useEffect } from 'react';
import StatsSection from '../../components/StatsSection/StatsSection';
import Map from '../../components/Map/Map';
import CountiesSection from '../../components/CountiesSection/CountiesSection';
import DateSection from '../../components/DateSection/DateSection';
const axios = require('axios').default;

export default function DashboardPage({ user }) {
  const [usData, setUsData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const [usCountiesCases, setUsCountiesCases] = useState([]);
  const [usCountiesDeaths, setUsCountiesDeaths] = useState([]);
  const onDashboard = true;

  useEffect(() => {
    function getUSData() {
      axios.get('https://corona.lmao.ninja/v2/countries/USA?yesterday=true&strict=true&query')
      .then(res => {
        const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({stat, val}));
        setUsData(apiDataArr);
      })
      .catch(err => {
        console.log(err);
      });
    };
    getUSData();
  }, []);

  useEffect(() => {
    function getUSChartData() {
      axios.get('https://corona.lmao.ninja/v2/historical/USA?lastdays=30')
      .then(res => {
        const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({stat, val}));
        setChartData([...chartData, Object.values(apiDataArr[2].val.cases), Object.values(apiDataArr[2].val.deaths)]);
        setChartLabels([...chartLabels, Object.keys(apiDataArr[2].val.cases)]);
      })
      .catch(err => {
        console.log(err);
      });
    };
    getUSChartData();
  }, []);

  useEffect(() => {
    function getTopCountiesData() {
      axios.get('https://corona.lmao.ninja/v2/jhucsse/counties')
      .then(res => {
        const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({stat, val})).sort((acc, curr) => curr.val.stats.confirmed - acc.val.stats.confirmed);
        const sortedCountiesCases = apiDataArr.sort((acc, curr) => curr.val.stats.confirmed - acc.val.stats.confirmed);
        const usCountiesCasesTemp = sortedCountiesCases.slice(0, 25);
        setUsCountiesCases(usCountiesCasesTemp);
        const sortedCountiesDeaths = apiDataArr.sort((acc, curr) => curr.val.stats.deaths - acc.val.stats.deaths);
        const usCountiesDeathsTemp = sortedCountiesDeaths.slice(0, 25);
        setUsCountiesDeaths(usCountiesDeathsTemp);
      })
      .catch(err => {
        console.log(err);
      });
    };
    getTopCountiesData();
  }, []);

  return (
    <div className="dashboard flex-ctr-ctr">
      <div className="dbStats"><StatsSection onDashboard={onDashboard} dbData={usData} dbChartData={chartData} dbChartLabels={chartLabels} /></div>
      <div className="dbMap"><Map onDashboard={onDashboard} /></div>
      <div className="dbCounties"><CountiesSection onDashboard={onDashboard} dbCountiesCases={usCountiesCases} dbCountiesDeaths={usCountiesDeaths} /></div>
      <div className="dbDate"><DateSection user={user} /></div>
    </div>
  );
}