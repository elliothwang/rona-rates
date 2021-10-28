import './CountiesSection.css';
import React, { useState, useEffect }  from 'react';
import CountyCard from '../CountyCard/CountyCard';
const axios = require('axios').default;

export default function CountiesSection() {
  const [usCountyCases, setUsCountyCases] = useState([]);
  const [usCountyDeaths, setUsCountyDeaths] = useState([]);
  const [casesShown, setCasesShown] = useState(true);

  function getCountyData() {
    axios.get('https://corona.lmao.ninja/v2/jhucsse/counties')
    .then(res => {
      const data = Object.entries(res.data).map(([stat, val]) => ({stat, val}));

      const sortedCountiesByCases = data.sort((acc, curr) => curr.val.stats.confirmed - acc.val.stats.confirmed);
      const top25CountiesByCases = sortedCountiesByCases.slice(0, 25);
      setUsCountyCases(top25CountiesByCases);

      const sortedCountiesByDeaths = data.sort((acc, curr) => curr.val.stats.deaths - acc.val.stats.deaths);
      const top25CountiesByDeaths = sortedCountiesByDeaths.slice(0, 25);
      setUsCountyDeaths(top25CountiesByDeaths);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => getCountyData(), []);

  function handleTabClick(evt) {
    const name = evt.target.className;
    if (casesShown && name === "deathsTab flex-ctr-ctr") {
      document.querySelector(".casesTab").classList.remove('activeTab');
      document.querySelector(".deathsTab").classList.add('activeTab');
      setCasesShown(false);
    } else if (!casesShown && name === "casesTab flex-ctr-ctr") {
      document.querySelector(".casesTab").classList.add('activeTab');
      document.querySelector(".deathsTab").classList.remove('activeTab');
      setCasesShown(true);
    };
  };

  return (
    <div className="countySectionOuterContainer">
      <div className="flex-ctr-ctr">
        <div className="casesTab activeTab flex-ctr-ctr" onClick={handleTabClick}>Cases by County</div>
        <div className="deathsTab flex-ctr-ctr" onClick={handleTabClick}>Deaths by County</div>
      </div>
      <div className="countySection">
        { casesShown ? 
          usCountyCases.map((usCounty, idx) => 
            <CountyCard 
              title={usCounty?.val.county}
              stat1={usCounty?.val.stats.confirmed }
              idx={idx}
              casesShown={casesShown}
            />
          )
          :
          usCountyDeaths.map((usCounty, idx) => 
            <CountyCard 
              title={usCounty?.val.county}
              stat1={usCounty?.val.stats.deaths }
              idx={idx}
              casesShown={casesShown}
            />
          )
        }
      </div>
    </div>
  )
}
