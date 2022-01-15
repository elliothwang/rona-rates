import './CountiesSection.css';
import CountyCard from '../CountyCard/CountyCard';
import { useSelector, useDispatch } from 'react-redux';
import { setCasesShown } from '../../features/casesSlice';

export default function CountiesSection({
  onDashboard,
  dbCountiesTopCases,
  dbCountiesTopDeaths,
  sCountiesCases,
  sCountiesDeaths,
}) {
  const dispatch = useDispatch();
  const casesShown = useSelector((state) => state.casesShown.value);

  function handleTabClick(evt) {
    const name = evt.target.className;
    if (casesShown && name === 'deathsTab flex-ctr-ctr') {
      dispatch(setCasesShown());
    } else if (!casesShown && name === 'casesTab flex-ctr-ctr') {
      dispatch(setCasesShown());
    }
  }

  return (
    <div className="countiesSection">
      <div className="countiesHeader flex-ctr-ctr">
        <div
          className={
            casesShown
              ? 'casesTab flex-ctr-ctr activeTab'
              : 'casesTab flex-ctr-ctr'
          }
          onClick={handleTabClick}
        >
          Cases by County
        </div>
        <div
          className={
            casesShown
              ? 'deathsTab flex-ctr-ctr'
              : 'deathsTab flex-ctr-ctr activeTab'
          }
          onClick={handleTabClick}
        >
          Deaths by County
        </div>
      </div>
      <div className="countiesContent">
        {onDashboard ? (
          <>
            {casesShown
              ? dbCountiesTopCases.map((county, idx) => (
                  <CountyCard
                    title={county?.val.county}
                    stat1={county?.val.stats.confirmed}
                    key={idx}
                    idx={idx}
                    casesShown={casesShown}
                  />
                ))
              : dbCountiesTopDeaths.map((county, idx) => (
                  <CountyCard
                    title={county?.val.county}
                    stat1={county?.val.stats.deaths}
                    key={idx}
                    idx={idx}
                    casesShown={casesShown}
                  />
                ))}
          </>
        ) : (
          <>
            {casesShown
              ? sCountiesCases.map((county, idx) => (
                  <CountyCard
                    title={county?.val.county}
                    stat1={county?.val.stats.confirmed}
                    key={idx}
                    idx={idx}
                    casesShown={casesShown}
                  />
                ))
              : sCountiesDeaths.map((county, idx) => (
                  <CountyCard
                    title={county?.val.county}
                    stat1={county?.val.stats.deaths}
                    key={idx}
                    idx={idx}
                    casesShown={casesShown}
                  />
                ))}
          </>
        )}
      </div>
    </div>
  );
}
