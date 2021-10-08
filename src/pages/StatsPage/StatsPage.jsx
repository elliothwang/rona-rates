import './StatsPage.css';
import React, { useEffect } from 'react';
import StateImg from '../../components/StateImg/StateImg'
import StateStats from '../../components/StateStats/StateStats'

export default function StatsPage({ apiData }) {
  const stateName = localStorage.getItem('storageStateName');
  const state = apiData.find((state) => state.state === stateName);

  function storeStateData() {
    localStorage.setItem('storageStateData', JSON.stringify(state));
  };

  useEffect(() => storeStateData());

  return (
  <div>
    <StateImg></StateImg>
    {/* <StateStats></StateStats> */}
  </div>
  )
}