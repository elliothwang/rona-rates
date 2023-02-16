import './DashboardPage.css';
import React, { useState, useEffect } from 'react';
import StatsSection from '../../components/StatsSection/StatsSection';
import Map from '../../components/Map/Map';
import CountiesSection from '../../components/CountiesSection/CountiesSection';
import DateSection from '../../components/DateSection/DateSection';
import { useDispatch } from 'react-redux';
import { setDefault } from '../../features/casesSlice';
import axios, * as others from 'axios';

export default function DashboardPage({ user }) {
  const dispatch = useDispatch();
  const [usData, setUsData] = useState([]);
  const [yesterdayData, setYesterdayData] = useState([]);
  // const [chartData, setChartData] = useState([]);
  // const [chartLabels, setChartLabels] = useState([]);
  const [usCountiesTopCases, setUsCountiesTopCases] = useState([]);
  const [usCountiesTopDeaths, setUsCountiesTopDeaths] = useState([]);

  useEffect(() => {
    function getTodayData() {
      axios
        .get('https://disease.sh/v3/covid-19/historical/USA')
        .then((res) => {
          const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({
            stat,
            val,
          }));
          setYesterdayData(apiDataArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTodayData();
  }, []);

  useEffect(() => {
    function getUSData() {
      axios
        .get('https://disease.sh/v3/covid-19/countries/USA?strict=true')
        .then((res) => {
          const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({
            stat,
            val,
          }));
          setUsData(apiDataArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUSData();
  }, []);

  useEffect(() => {
    function getTopCountiesData() {
      axios
        .get('https://disease.sh/v3/covid-19/jhucsse/counties')
        .then((res) => {
          const sortedCountiesCases = Object.entries(res.data)
            .map(([stat, val]) => ({ stat, val }))
            .sort(
              (acc, curr) => curr.val.stats.confirmed - acc.val.stats.confirmed
            );
          const usCountiesTopCases = sortedCountiesCases.slice(0, 25);
          setUsCountiesTopCases(usCountiesTopCases);
          const sortedCountiesDeaths = Object.entries(res.data)
            .map(([stat, val]) => ({ stat, val }))
            .sort((acc, curr) => curr.val.stats.deaths - acc.val.stats.deaths);
          const usCountiesTopDeaths = sortedCountiesDeaths.slice(0, 25);
          setUsCountiesTopDeaths(usCountiesTopDeaths);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTopCountiesData();
  }, []);

  useEffect(() => {
    localStorage.removeItem('storageStateName');
    dispatch(setDefault());
  }, [dispatch]);

  return (
    <div className="dashboard flex-ctr-ctr">
      <div className="dbStats">
        <StatsSection
          onDashboard={true}
          dbData={usData}
          yesData={yesterdayData}
          // dbChartData={chartData}
          // dbChartLabels={chartLabels}
        />
      </div>
      <div className="dbMap">
        <Map onDashboard={true} user={user} />
      </div>
      <div className="dbCounties">
        <CountiesSection
          onDashboard={true}
          dbCountiesTopCases={usCountiesTopCases}
          dbCountiesTopDeaths={usCountiesTopDeaths}
        />
      </div>
      <div className="dbDate">
        <DateSection user={user} />
      </div>
    </div>
  );
}
