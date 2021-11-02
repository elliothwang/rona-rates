import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import * as help from '../../utilities/helper-functions';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize()
  .domain([1, 5000000])
  .range([
    "#cfe2f3",
    "#9fc5e8",
    "#6fa8dc",
    "#3d85c6",
    "#416aab",
    "#204c91"
  ]);

export default function MapChart({ usCounties }) {
  const [countiesData, setCountiesData] = useState([]);

  useEffect(() => {
    setCountiesData(usCounties);
  }, []);
  
  return (
    <>
      <ComposableMap Projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              // const curr = countiesData.find(county => help.geoId(`${county.county} County, ${help.stateAbbr(county.province)}`) === geo.id);
              return (
                <Geography
                key={geo.rsmKey}
                geography={geo}
                // fill={colorScale(curr ? curr.stats.confirmed : "#EEE")}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};
