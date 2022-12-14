import './Loading.css';
import styled, { keyframes } from 'styled-components';
import React from 'react';


  const commonStyle = {
    margin: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };

  const bouncedelay = keyframes`
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

  const LoadingContainer = styled.div`
    height: 0;
    width: 4px;
    border-width: 0 4px
      ${(props) =>
        props.size === 'small' ? 40 : props.size === 'large' ? 170 : 50}px
      4px;
    border-style: none solid solid;
    border-color: transparent transparent ${(props) => props.color || '#00adb5'};
    position: relative;
    padding-top: 25px;
  `;

  const ItemFirst = styled.div`
    height: 0;
    width: 2px;
    border-width: ${(props) =>
        props.size === 'small' ? 24 : props.size === 'large' ? 90 : 30}px
      2px 0px 2px;
    border-style: solid solid none;
    border-color: ${(props) => props.color || '#00adb5'} transparent transparent;
    transform-origin: 0 -2px;
    transform: rotate(60deg);
    position: absolute;
  `;

  const ItemSecord = styled.div`
    height: 0;
    width: 2px;
    border-width: ${(props) =>
        props.size === 'small' ? 24 : props.size === 'large' ? 90 : 30}px
      2px 0px 2px;
    border-style: solid solid none;
    border-color: ${(props) => props.color || '#00adb5'} transparent transparent;
    transform-origin: 2px -1px;
    transform: rotate(180deg);
    position: absolute;
  `;

  const ItemThree = styled.div`
    height: 0;
    width: 2px;
    border-width: ${(props) =>
        props.size === 'small' ? 24 : props.size === 'large' ? 90 : 30}px
      2px 0px 2px;
    border-style: solid solid none;
    border-color: ${(props) => props.color || '#00adb5'} transparent transparent;
    transform-origin: 5px 0;
    transform: rotate(300deg);
    position: absolute;
  `;

  const Center = styled.div`
    width: 6px;
    height: 6px;
    border: 2px ${(props) => props.color || '#00adb5'} solid;
    background: black;
    border-radius: 5px;
    transform: translateX(-3px) translateY(-4px);
    position: absolute;
  `;

  const Con = styled.div`
    position: relative;
    animation: ${bouncedelay} ${(props) => props.speed || 4}s infinite linear;
  `;

  function Loading ({
    style = commonStyle,
    color = "#242423",
    speed,
    size = 'large',
  })  {
    return (
      <LoadingContainer id="loading" style={style} color={color} size={size}>
        <Center color={color} />
        <Con speed={speed}>
          <ItemFirst color={color} size={size} />
          <ItemSecord color={color} size={size} />
          <ItemThree color={color} size={size} />
        </Con>
      </LoadingContainer>
    );
  };

export default Loading;
