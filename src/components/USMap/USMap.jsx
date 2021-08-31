import './USMap.css';
import React from 'react';
import { defineGrid } from 'honeycomb-grid';

export default function USMap() {
  const Grid = defineGrid();
  Grid.rectangle({ width: 4, height: 4 });
  
  return (
    <div className="mapContainer">us map</div>
  )
}
