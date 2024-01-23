import React from 'react';
import './AboutMain.css'; // Import the CSS file for styling
import { Link, useNavigate } from 'react-router-dom';

const AboutMain = () => {
  const linkToTimeline = useNavigate();

  const handleCardClick1 = () => {
    linkToTimeline('/AboutTimeLineFirstDay');
  };

  const handleCardClick2 = () => {
    linkToTimeline('/AboutTimeLineSecondDay');
  };

  const handleCardClick3 = () => {
    linkToTimeline('/AboutTimeLineThirdDay');
  };

  return (
    <>
      <div className="card-container">
        <h1 id='aboutmain__heading'>Shedule</h1>
      <div className="card" onClick={handleCardClick1}>
        <h2>Card 1</h2>
        <p>Technotsav Day 1: Exciting sports semi-finals, grand inauguration, dynamic youth parliament, mesmerizing dance performances, and electrifying band showcase.</p>
      </div>

      <div className="card" onClick={handleCardClick2}>
        <h2>Card 2</h2>
        <p>Technotsav Day 2: Intense sports finals, glamorous fashion show, muscle clash showdown, soulful qawwali, and nostalgic alumni meet.</p>
      </div>

      <div className="card" onClick={handleCardClick3}>
        <h2>Card 3</h2>
        <p>Technotsav Day 3: Hilarious Takeshi Castle, thrilling reel competition with prize distribution, and a pulsating DJ jam session.</p>
      </div>
    </div>
    </>
  );
};

export default AboutMain;
