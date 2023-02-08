import { useSelector, useDispatch } from 'react-redux';
import { setCasesShown } from '../../features/casesSlice';

export default function MapNavBar({
  onDashboard,
  legendShown,
  setLegendShown,
  countiesShown,
  setCountiesShown,
}) {
  const dispatch = useDispatch();
  const casesShown = useSelector((state) => state.casesShown.value);

  function handleLegendClick() {
    setLegendShown(!legendShown);
  }

  function handleColorSwitch(evt) {
    const name = evt.target.className;
    if (casesShown && name === 'deathsButton') {
      dispatch(setCasesShown());
    } else if (!casesShown && name === 'casesButton') {
      dispatch(setCasesShown());
    }
  }

  function handleMapSwitch() {
    setCountiesShown(!countiesShown);
  }

  return (
    <div className="mapNavBar">
      <div
        className="openMapLegendIcon flex-ctr-ctr"
        onClick={handleLegendClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2vh"
          height="2vh"
          fill="currentColor"
          className="bi bi-layout-text-sidebar-reverse"
          viewBox="0 0 16 16"
        >
          <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" />
          <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z" />
        </svg>
      </div>
      <div
        className={
          legendShown
            ? 'mapLegend flex-ctr-ctr'
            : 'mapLegend flex-ctr-ctr hidden'
        }
      >
        <div className="closeMapLegendIcon" onClick={handleLegendClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.5vh"
            height="3.5vh"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="mapLegendTitle">
          {casesShown ? <b>Total Cases</b> : <b>Total Deaths</b>}
        </div>
        <div className="mapLegendMainSection flex-ctr-ctr">
          {casesShown ? (
            <div className="mapLegendColorBoxes flex-ctr-ctr">
              <div className="blue6 firstColorBox"></div>
              <div className="blue5"></div>
              <div className="blue4"></div>
              <div className="blue3"></div>
              <div className="blue2"></div>
              <div className="blue1 lastColorBox"></div>
            </div>
          ) : (
            <div className="mapLegendColorBoxes flex-ctr-ctr">
              <div className="red6 firstColorBox"></div>
              <div className="red5"></div>
              <div className="red4"></div>
              <div className="red3"></div>
              <div className="red2"></div>
              <div className="red1 lastColorBox"></div>
            </div>
          )}
          {onDashboard && !countiesShown ? (
            casesShown ? (
              <div className="mapLegendText">
                <div>6,000,001+</div>
                <div>3,000,001 - 6,000,000</div>
                <div>2,000,001 - 3,000,000</div>
                <div>1,000,001 - 2,000,000</div>
                <div>500,001 - 1,000,000</div>
                <div>1 - 500,000</div>
              </div>
            ) : (
              <div className="mapLegendText">
                <div>75,001+</div>
                <div>50,001 - 75,000</div>
                <div>25,001 - 50,000</div>
                <div>10,001 - 25,000</div>
                <div>5,001 - 10,000</div>
                <div>1 - 5,000</div>
              </div>
            )
          ) : casesShown ? (
            <div className="mapLegendText">
              <div>1,000,001+</div>
              <div>500,001 - 1,000,000</div>
              <div>100,001 - 250,000</div>
              <div>25,001 - 100,000</div>
              <div>1,001 - 25,000</div>
              <div>1 - 1,000</div>
            </div>
          ) : (
            <div className="mapLegendText">
              <div>10,001+</div>
              <div>5,001 - 10,000</div>
              <div>1,001 - 5,000</div>
              <div>501 - 1,000</div>
              <div>101 - 500</div>
              <div>1 - 100</div>
            </div>
          )}
        </div>
      </div>
      <div className="buttonsContainer">
        <div
          className={casesShown ? 'deathsButton' : 'deathsButton deathsMap'}
          onClick={handleColorSwitch}
        >
          Deaths
        </div>
        <div
          className={casesShown ? 'casesButton casesMap' : 'casesButton'}
          onClick={handleColorSwitch}
        >
          Cases
        </div>
        {onDashboard && (
          <div
            className={
              countiesShown
                ? 'countiesButton countiesDefault'
                : 'countiesButton countiesMap'
            }
            onClick={handleMapSwitch}
          >
            Counties
          </div>
        )}
      </div>
    </div>
  );
}
