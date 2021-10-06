import './StatsPage.css';
import React from 'react';
import { useLocation } from "react-router-dom";

export default function StatsPage({ apiData }) {
  const location = useLocation();
  const state = apiData.find((state) => state.state === location.state.name);

  return (
  <div>
    <h1>{state.state}</h1>
    <div className="stateStatsContainer">
      <div className="stateCasesTotal">
        Total Cases: { state.cases }
      </div>
      <div className="stateDeathsTotal">
        Total Deaths: { state.deaths }  
      </div>
      <div className="stateRecoveriesTotal">
        Total Recoveries: { state.recovered }
      </div>
      <div className="stateCasesToday">
        New Cases: { state.todayCases }
      </div>
      <div className="stateDeathsToday">
        New Deaths: { state.todayDeaths }
      </div>
    </div>
    <div className="stateImgContainer">
      State Image
    </div>
  </div>
  )
}