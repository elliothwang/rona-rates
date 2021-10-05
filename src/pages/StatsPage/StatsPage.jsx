import './StatsPage.css';
import React from 'react';
import { useLocation } from "react-router-dom";

export default function StatsPage({ apiData }) {
  const location = useLocation();
  const state = apiData.find((state) => state.state === location.state.name);

  return (
  <div>
    Stats Page
    <div>
      { state.state }
      { state.cases }
      { state.deaths }
      { state.recovered }
    </div>
  </div>
  )
}