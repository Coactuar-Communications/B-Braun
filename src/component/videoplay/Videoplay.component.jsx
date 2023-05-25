import React, { useState } from "react";
import startup from "../../videos/startup/DEVICE.mp4";
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
    // setShowImage(true);
    setHidevideo(true);
  };
  const handlestart = () => {
    setHidevideo(true);
    setShowImage(false);
    // setOutsidebuttons(false);
  };
  return (
    <div>
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
            <Link to="/menu" className="menu">
              menu
            </Link>
          )}

          {showImage && (
            <div>
              <div className="image-container">
                <img src={okaybutton} alt="Displayed Image" />
              </div>
              <button className="button" onClick={handlestart}>
                start
              </button>
            </div>
          )}
          {hidevideo && (
            <video id="video_start" autoPlay muted onEnded={handleVideoEnded}>
              <source src={Menustart} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </div>
  );
}
export default Videoplay;
