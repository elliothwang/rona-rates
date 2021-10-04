import './StatsPage.css';
import React from 'react';
import { useParams } from "react-router-dom";

export default function StatsPage({ APIData }) {
  const { params } = useParams();
  // const state = APIData.find((state) => state.name === name);

  return (
  <div>
    stats
    { console.log(params) }
  </div>
  )
}