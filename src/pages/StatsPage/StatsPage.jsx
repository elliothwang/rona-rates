import './StatsPage.css';
import React, { useEffect } from 'react';
import StatsContainer from '../../components/StatsContainer/StatsContainer';

export default function StatsPage({ allStatesData }) {
  const stateName = localStorage.getItem('storageStateName');
  const state = allStatesData.find((state) => state.state === stateName);

  function storeStateData() {
    localStorage.setItem('storageStateData', JSON.stringify(state));
  };

  useEffect(() => storeStateData());

  return (
  <div>
    {/* send pertinent stats to StatsContainer */}
  </div>
  )
}
