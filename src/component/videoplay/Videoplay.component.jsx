import React, { useState } from "react";
import startup from "../../videos/startup/DEVICE.mp4";
import bg from "../../images/startup/bg-image.jpg";
import okaybutton from "../../images/startup/INJECTION RATE SELECTION.png";
import Menu from "../Menu/Menu.component";
import "./videoplay.css";
import { Link } from "react-router-dom";
function Videoplay() {
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const handleVideoEnded = () => {
    setShowBackgroundImage(true);
  };
  const handleButtonClick = () => {
    setShowImage(true);
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
          <Link to="/menu" className="menu">
            menu
          </Link>
          {showImage && (
            <div className="image-container">
              <img src={okaybutton} alt="Displayed Image" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Videoplay;
