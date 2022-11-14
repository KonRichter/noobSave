import './CountryEnergyMix.css';
import React from 'react';
import IconBar from '../IconBar/IconBar';
import { useState, useEffect } from 'react';
import germanFlagGif from '../../assets/Germany-l.gif';

function CountryEnergyMix({
  energyDataArr,
  guessed,
  setGuessed,
  pointsSet,
  setPointsSet,
}) {
  // const [energyDataArr, setEnergyDataArr] = useState([]);
  // const [guessed, setGuessed] = useState(false);
  // const [commonTime, setCommonTime] = useState();

  function handleClick() {
    setGuessed(true);
    setPointsSet(100);
  }

  const guessedStyle = {
    cursor: `${guessed && 'not-allowed'}`,
  };

  return (
    <div className='countryenergymix'>
      {/* <img id='german-flag' src={germanFlagGif} alt='fluttering German flag' /> */}
      {/*       license requirements flag missing!
      https://www.3dflagsplus.com/2015/11/germany-animated-flags-pictures.html
       */}
      {/*       license requirements smard missing!
       */}
      {/*       license requirements flaticon missing!
       */}

      <ul id='icons-list'>
        {energyDataArr.map((energysource) => (
          <IconBar
            name={energysource[0]}
            mwhValue={energysource[1]}
            roundedValue={energysource[2]}
            guessed={guessed}
            pointsSet={pointsSet}
            setPointsSet={setPointsSet}
            key={energysource[0]}
          />
        ))}
      </ul>
      {guessed ? (
        <a href="https://www.smard.de/en">
        <button id='link-smard' >
          More Information ➡
        </button>
        </a>
      ) : (
        <button id='guess' onClick={handleClick}>
          Guess
        </button>
      )}
    </div>
  );
}

export default CountryEnergyMix;
