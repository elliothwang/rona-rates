import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

export default function MapChart ({ user, userLat, userLong, userLocation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // https://www.bls.gov/lau/
    // csv("/unemployment-by-county-2017.csv").then(counties => {
    //   setData(counties);
    // });
  }, []);

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#FFF"
                    geography={geo}
                    fill="#DDD"
                  />
                ))}
              </>
            )}
          </Geographies>
          <Marker coordinates={[userLong, userLat]}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={15}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {user.name}
            </text>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};
