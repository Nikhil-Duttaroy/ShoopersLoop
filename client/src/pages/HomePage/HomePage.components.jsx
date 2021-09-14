import React from "react";
// import './HomePage.styles.scss';
import Directory from './../../components/Directory/Directory.components';
import {HomePageContainer} from './HomePage.styles';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src='https://i.ibb.co/wNWVMCJ/wardrobe-1.jpg'
    alt="1"
    onDragStart={handleDragStart}
    style={{ width: "100%", height: "70vh", objectFit: "contain" }}
  />,
  <img
    alt='2'
    src='https://i.ibb.co/C9sw3F8/overview.jpg'
    onDragStart={handleDragStart}
    style={{ width: "100%", height: "70vh", objectFit: "contain" }}
  />,
];

  const HomePage =() =>{
  return (
    <HomePageContainer>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay='true'
        animationDuration='5000'
        disableDotsControls='false'
        // autoPlayControls='false'
        infinite='true'
      />
      <Directory />
    </HomePageContainer>
  );
  }

export default HomePage