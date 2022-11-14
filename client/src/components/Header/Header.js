import './Header.css';
import germanFlagGif from '../../assets/Germany-l.gif';
import logo from '../../assets/LogoLightning.svg';
import pretzel from '../../assets/Pretzel.png';
import beer from '../../assets/Beer.png';
import React from 'react';
import { useState } from 'react';

// license requirements missing: http://www.stickpng.com/img/food/pretzels/pretzel-salt-on-top-part
// license requirements missing: https://pngimg.com/image/2389

function Header({textForHeader}) {
  const [counter, setCounter] = useState(0);
  const [beerCounter, setBeerCounter] = useState(false);
  const [animate, setAnimate] = useState(true);

  const timeOfDay = () => {
    const today = new Date();
    const currentHour = today.getHours();
    if (currentHour < 6 || currentHour > 22) {
      return 'this night';
    } else if (currentHour > 18) {
      return 'this evening';
    } else if (currentHour > 12) {
      return 'this afternoon';
    } else if (currentHour > 6) {
      return 'this morning';
    }
  };

  function handleFlagClick() {
    if (counter === 0) {
      setAnimate(true);
    }
    setCounter(counter + 1);
  }

  function handlePretzelClick() {
    setBeerCounter(true);
  }

  function handleBeerClick() {
    alert('You are German now.');
  }

  function handleAnimationEnd() {
    setCounter(0);
    setBeerCounter(false);
    setAnimate(false);
  }

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div className='header'>
      <div className='left'>
        {/* <img
          id='german-flag'
          onClick={handleFlagClick}
          src={germanFlagGif}
          alt='fluttering German flag'
        /> */}
        <img id='logo' src={logo} onClick={refreshPage} alt='PoweredCitizen' />
      </div>
      <h2>{textForHeader ? textForHeader : `Guess ${timeOfDay()}'s energy mix in Germany!`}</h2>
      <div className='right'>
        <img
          className={counter === 3 && animate ? 'move' : 'dontMove'}
          onAnimationEnd={handleAnimationEnd}
          onClick={handlePretzelClick}
          src={pretzel}
          alt='pretzel'
        />
        <img
          className={beerCounter && animate ? 'beerMove' : 'dontMove'}
          onAnimationEnd={handleAnimationEnd}
          onClick={handleBeerClick}
          src={beer}
          alt='beer'
        />
      </div>
    </div>
  );
}

export default Header;
