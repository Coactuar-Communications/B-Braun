import React, { useState } from "react";
import startup from "../../images/startup/B-Braun Startup Revised.mp4";
import bg from "../../images/startup/bg-image.jpg";
import okaybutton from "../../images/startup/INJECTION RATE SELECTION.png";
import Menustart from "../../videos/startup/START.mp4";
import "./videoplay.css";
import { Link } from "react-router-dom";
function Videoplay() {
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [hidevideo, setHidevideo] = useState(false);
  const [outsidebuttons, setOutsidebuttons] = useState(true);
  const handleVideoEnded = () => {
    setShowBackgroundImage(true);
    setHidevideo(false);
  };
  const handleButtonClick = () => {
    setShowImage(true);
  };
  const handlestart = () => {
    setHidevideo(true);
    setShowImage(false);
    setOutsidebuttons(true);
  };
  return (
    <div className="video">
      {!showBackgroundImage ? (
        <video id="video" autoPlay muted onEnded={handleVideoEnded}>
          <source src={startup} type="video/mp4" />
        </video>
      ) : (
        <div className="background-image-container">
          {/* Render your background image here */}
          <img src={bg} alt="Background Image" />
          {/* <button className="button">Click Me</button> */}
          {!showImage && (
            <button className="button" onClick={handleButtonClick}>
              ok
            </button>
          )}
          {outsidebuttons && (
            <>
            <Link to="/menu" className="menu">
              menu
            </Link>
              <Link to="/menu" className="menu2">
              BOL
            </Link>
            </>
          )}

          {showImage && (
            <div>
              <div className="image-container">
                <img src={okaybutton} alt="Displayed Image" />
              </div>
              <button className="start-button" onClick={handlestart}>
                start
              </button>
            </div>
          )}
          {hidevideo && (
            <video id="video_start" autoPlay muted onEnded={handleVideoEnded} width={100}>
              <source src={Menustart} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </div>
  );
}
export default Videoplay;
