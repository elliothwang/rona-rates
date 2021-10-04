import './StatsPage.css';
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
const axios = require('axios').default;

export default function StatsPage({ apiData }) {
  const location = useLocation();
  const name = apiData.find((state) => state.state === location.state.name);

  

  return (
  <div>
    Stats Page
    <div>
      { name.state }
      { name.cases }
      { name.deaths }
      { name.recovered }
    </div>
  </div>
  )
}