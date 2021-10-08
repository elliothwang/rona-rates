import './StatsPage.css';
import React, { useEffect } from 'react';
import StateImg from '../../components/StateImg/StateImg'
import StateStats from '../../components/StateStats/StateStats'

export default function StatsPage({ apiData }) {
  const stateName = localStorage.getItem('state');
  const state = apiData.find((state) => state.state === stateName);

  function storeStateData() {
    localStorage.setItem('stateData', JSON.stringify(state));
  };

  useEffect(() => storeStateData(), [stateName]);

  return (
  <div>
    <StateImg></StateImg>
    {/* <StateStats></StateStats> */}
  </div>
  )
}