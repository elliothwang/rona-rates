import React, { useState, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { scaleThreshold } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import * as help from '../../utilities/helper-functions';
import axios from 'axios';

const geoUrlStates = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
const geoUrlCounties =
  'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json';

const colorScaleStateCases = scaleThreshold()
  .domain([500000, 1000000, 2000000, 3000000, 6000000, 1500000])
  .range(['#cfe2f3', '#9fc5e8', '#6fa8dc', '#3d85c6', '#416aab', '#204c91']);

const colorScaleStateDeaths = scaleThreshold()
  .domain([5000, 10000, 25000, 50000, 75000, 500000])
  .range(['#fcdcd6', '#ffb6b6', '#f29292', '#de6969', '#da3a3a', '#bb0808']);

const colorScaleCountyCases = scaleThreshold()
  .domain([5000, 10000, 25000, 50000, 1000000, 10000000])
  .range(['#cfe2f3', '#9fc5e8', '#6fa8dc', '#3d85c6', '#416aab', '#204c91']);

const colorScaleCountyDeaths = scaleThreshold()
  .domain([100, 500, 1000, 5000, 10000, 100000])
  .range(['#fcdcd6', '#ffb6b6', '#f29292', '#de6969', '#da3a3a', '#bb0808']);

const MapChart = ({
  user,
  userLat,
  userLong,
  userLocation,
  countiesShown,
  ReactTooltipContent,
  setReactTooltipContent,
}) => {
  const casesShown = useSelector((state) => state.casesShown.value);
  const [stateData, setStateData] = useState([]);
  const [usCounties, setUsCounties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    function getStateData() {
      axios
        .get('https://disease.sh/v3/covid-19/states')
        .then((res) => {
          const data = Object.entries(res.data).map((e) => e[1]);
          setStateData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStateData();
  }, []);

  useEffect(() => {
    function getUSCountiesData() {
      axios
        .get('https://disease.sh/v3/covid-19/jhucsse/counties')
        .then((res) => {
          const data = Object.entries(res.data).map((e) => e[1]);
          for (let i = 0; i < data.length; i++) {
            data[i].country = help.geoId(data[i].county, data[i].province);
          }
          setUsCounties(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUSCountiesData();
  }, []);

  function handleMapClick() {
    if (!countiesShown) {
      const state = ReactTooltipContent.split(' - ')[0];
      const stateRoute = state.split(' ').join('');
      localStorage.setItem('storageStateName', state);
      navigate(`/${stateRoute}`);
    } else {
      alert('Click the "Counties" Button again and then click on any state.');
    }
  }

  return (
    <ComposableMap className="usMap" data-tip="" projection="geoAlbersUsa">
      <ZoomableGroup zoom={1}>
        <Geographies geography={countiesShown ? geoUrlCounties : geoUrlStates}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const currState = stateData.find(
                (state) => state.state === geo.properties.name
              );
              const currCounty = usCounties.find(
                (county) => county.country === geo.id
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    countiesShown
                      ? casesShown
                        ? colorScaleCountyCases(
                            currCounty ? currCounty?.stats.confirmed : '#EEE'
                          )
                        : colorScaleCountyDeaths(
                            currCounty ? currCounty?.stats.deaths : '#EEE'
                          )
                      : casesShown
                      ? colorScaleStateCases(
                          currState ? currState?.cases : '#EEE'
                        )
                      : colorScaleStateDeaths(
                          currState ? currState?.deaths : '#EEE'
                        )
                  }
                  stroke="#dce4e9"
                  strokeWidth={countiesShown ? '0.25' : '0.5'}
                  style={{
                    hover: {
                      fill: 'gray',
                    },
                  }}
                  onClick={handleMapClick}
                  onMouseEnter={() => {
                    (currState || currCounty) &&
                      (countiesShown
                        ? casesShown
                          ? setReactTooltipContent(
                              `${geo.properties.name} - ${help.addCommas(
                                currCounty?.stats.confirmed
                              )}`
                            )
                          : setReactTooltipContent(
                              `${geo.properties.name} - ${help.addCommas(
                                currCounty?.stats.deaths
                              )}`
                            )
                        : casesShown
                        ? setReactTooltipContent(
                            `${geo.properties.name} - ${help.addCommas(
                              currState?.cases
                            )}`
                          )
                        : setReactTooltipContent(
                            `${geo.properties.name} - ${help.addCommas(
                              currState?.deaths
                            )}`
                          ));
                  }}
                  onMouseLeave={() => {
                    setReactTooltipContent('');
                  }}
                />
              );
            })
          }
        </Geographies>
        {user && userLong && userLat && (
          <Marker coordinates={[userLong, userLat]}>
            <g
              fill="none"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={-30}
              style={{ fontFamily: 'PT Serif', fill: 'black' }}
            >
              {user.name}
            </text>
          </Marker>
        )}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(MapChart);
