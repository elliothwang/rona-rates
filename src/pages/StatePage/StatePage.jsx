import './StatePage.css';
import React, { useState, useEffect } from 'react';

const axios = require('axios').default;

export default function StatePage({ user }) {
  const stateName = localStorage.getItem('storageStateName');

  function getStateData() {
    axios.get('https://corona.lmao.ninja/v2/jhucsse/counties')
    .then(res => {
      const data = Object.entries(res.data).map(([stat, val]) => ({stat, val}));
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => getStateData(), []);

  return (
  <div className="statsPage flex-ctr-ctr">
    {/* <div className="stateStats"><StatsSection /></div>
    <div className="stateMap"><USMap /></div>
    <div className="stateCounties"><CountyStatsSection /></div>
    <div className="date"><DateSection /></div> */}
  </div>
  )
}
