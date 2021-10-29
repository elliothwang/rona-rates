import './CountiesSection.css';
import React, { useState } from 'react';
import CountyCard from '../CountyCard/CountyCard';

export default function CountiesSection({ onDashboard, dbCountiesCases, dbCountiesDeaths, sCountiesCases, sCountiesDeaths }) {
  const [casesShown, setCasesShown] = useState(true);

  function handleTabClick(evt) {
    const name = evt.target.className;
    if (casesShown && name === "deathsTab flex-ctr-ctr") {
      document.querySelector(".casesTab").classList.remove('activeTab');
      document.querySelector(".deathsTab").classList.add('activeTab');
      setCasesShown(!casesShown);
    } else if (!casesShown && name === "casesTab flex-ctr-ctr") {
      document.querySelector(".casesTab").classList.add('activeTab');
      document.querySelector(".deathsTab").classList.remove('activeTab');
      setCasesShown(!casesShown);
    };
  };

  return (
    <div className="countiesSection">
      <div className="countiesHeader flex-ctr-ctr">
        <div className="casesTab activeTab flex-ctr-ctr" onClick={handleTabClick}>Cases by County</div>
        <div className="deathsTab flex-ctr-ctr" onClick={handleTabClick}>Deaths by County</div>
      </div>
      <div className="countiesContent">
        { onDashboard ? 
          <>
            { casesShown ? 
              dbCountiesCases.map((county, idx) => 
                <CountyCard 
                  title={county?.val.county}
                  stat1={county?.val.stats.confirmed }
                  key={idx}
                  idx={idx}
                  casesShown={casesShown}
                />
              )
              :
              dbCountiesDeaths.map((county, idx) => 
                <CountyCard 
                  title={county?.val.county}
                  stat1={county?.val.stats.deaths }
                  key={idx}
                  idx={idx}
                  casesShown={casesShown}
                />
              )
            }
          </>
        : 
          <>
            { casesShown ? 
              sCountiesCases.map((county, idx) => 
                <CountyCard 
                  title={county?.val.county}
                  stat1={county?.val.stats.confirmed }
                  key={idx}
                  idx={idx}
                  casesShown={casesShown}
                />
              )
              :
              sCountiesDeaths.map((county, idx) => 
                <CountyCard 
                  title={county?.val.county}
                  stat1={county?.val.stats.deaths }
                  key={idx}
                  idx={idx}
                  casesShown={casesShown}
                />
              )
            }
          </>
        }
      </div>
    </div>
  )
}
