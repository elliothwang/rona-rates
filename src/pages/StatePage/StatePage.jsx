import React, { useState, useEffect } from 'react';
import Map from '../../components/Map/Map';
import StatsSection from '../../components/StatsSection/StatsSection';
import CountiesSection from '../../components/CountiesSection/CountiesSection';
import DateSection from '../../components/DateSection/DateSection';
import axios from 'axios';

// ! FIX: CORS Policy Error with StatePage's API calls

export default function StatePage({ user }) {
  const [stateData, setStateData] = useState([]);
  const [chartData, setChartData] = useState([]);
  // const [chartLabels, setChartLabels] = useState([]);
  const [stateCountiesCases, setStateCountiesCases] = useState([]);
  const [stateCountiesDeaths, setStateCountiesDeaths] = useState([]);
  const state = localStorage.getItem('storageStateName');

  useEffect(() => {
    function getStateData() {
      axios
        .get(`https://disease.sh/v3/covid-19/states/${state}`)
        .then((res) => {
          const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({
            stat,
            val,
          }));
          setStateData(apiDataArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStateData();
  }, [state]);

  useEffect(() => {
    function getStateChartData() {
      setChartData(null);
    }
    getStateChartData();
  }, [state]);

  useEffect(() => {
    function getStateCountiesData() {
      axios
        .get('https://disease.sh/v3/covid-19/jhucsse/counties')
        .then((res) => {
          const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({
            stat,
            val,
          }));
          const stateCountiesCases = apiDataArr
            .filter((el) => el.val.province === `${state}`)
            .sort(
              (acc, curr) => curr.val.stats.confirmed - acc.val.stats.confirmed
            );
          setStateCountiesCases(stateCountiesCases);
          const stateCountiesDeaths = apiDataArr
            .filter((el) => el.val.province === `${state}`)
            .sort(
              (acc, curr) => curr.val.stats.confirmed - acc.val.stats.confirmed
            );
          setStateCountiesDeaths(stateCountiesDeaths);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStateCountiesData();
  }, [state]);

  return (
    <div className="statePage dashboard flex-ctr-ctr">
      <div className="dbStats">
        <StatsSection
          onDashboard={false}
          sData={stateData}
          sChartData={chartData}
        />
      </div>
      <div className="dbMap">
        <Map onDashboard={false} user={user} />
      </div>
      <div className="dbCounties">
        <CountiesSection
          onDashboard={false}
          sCountiesCases={stateCountiesCases}
          sCountiesDeaths={stateCountiesDeaths}
        />
      </div>
      <div className="dbDate">
        <DateSection user={user} />
      </div>
    </div>
  );
}
