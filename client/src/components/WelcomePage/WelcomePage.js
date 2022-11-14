import './WelcomePage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import introGIF from '../../assets/Intro3.gif';
import typingGIF from '../../assets/Typing.gif';
import WindPic from '../../assets/WindPic.png';
import CoalPic from '../../assets/CoalPic.png';
import HydroPic from '../../assets/HydroPic.png';
import NuclearPic from '../../assets/NuclearPic.png';
import SolarPic from '../../assets/SolarPic.png';
import Header from '../Header/Header';

function WelcomePage({ textForHeader }) {
  return (
    <div className='welcome-page'>
      <Header textForHeader={textForHeader} />
      <div id='welcome-starter'>
        {/* <img src={SolarPic} alt='concentrated solar power plant' /> */}
        <div className='typewriter'>
        <h1>This is an example text to be typed?</h1>
      </div>
      <div className='typewriter2'>
        <h1>This is an example text to be typed.</h1>
      </div>
      </div>
      <div className='welcome-container'>
        <div className='welcome-left'>
          <img
            className='energy-pic'
            src={NuclearPic}
            alt='nuclear power plant'
          />
        </div>
        <div className='welcome-right'>
          <img className='energy-pic' src={HydroPic} alt='hydro power plant' />
        </div>
        <div className='welcome-left'>
          <img className='energy-pic' src={WindPic} alt='wind park' />
        </div>
        <div className='welcome-right'>
          <img
            className='energy-pic'
            src={CoalPic}
            alt='coal-fired power plant'
          />
        </div>
      </div>
      

      {/* <img id='gif' src={typingGIF} alt='Introductory gif' /> */}
      <div id="linker">
      <Link to='/gameboard' id="innerLink">Get to my cool app ▶</Link>
      </div>
    </div>
  );
}

export default WelcomePage;
