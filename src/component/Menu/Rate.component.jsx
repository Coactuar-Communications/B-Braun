import React, { useState } from "react";
import bg from "../../images/rate/bg.png";
import overview from "../../images/mainmenu/Overview.png";
import rate from "../../images/rate/Modify rate.png";
import Menustart from "../../videos/startup/START.mp4";
import "./Menu.css";
import { Link } from "react-router-dom";
function Rate() {
  const [showImage, setShowImage] = useState(false);
  const [hidevideo, setHidevideo] = useState(false);
  const [buttonhide, setbuttonhide] = useState(false);
  const handleButtonClick = () => {
    setHidevideo(true);
  };
  const handleVideoEnded = () => {
    setHidevideo(false);
    setShowImage(true);
  };
  
  const handlestart = () => {
    setHidevideo(true);
    setShowImage(false);
  };
  return (
    <div>
      <div className="background-image-container">
        <img src={bg} alt="Background Image" />
        {!showImage ? (
          <>
            {!buttonhide && (
              <button className="button" onClick={handleButtonClick}>
                ok
              </button>
            )}
            <Link to="/volume" className="down">
              down
            </Link>
          </>
        ) : (
          <>
            {showImage && (
              <>
                <div className="image-container">
                  <img src={rate} alt="Displayed Image" />
                </div>
                <button className="button" onClick={handlestart}>
                  ok
                </button>
              </>
            )}
          </>
        )}
      </div>
      {hidevideo && (
        <video id="video_start" autoPlay muted onEnded={handleVideoEnded}>
          <source src={Menustart} type="video/mp4" />
        </video>
      )}
   
    </div>
  )
}
export default Rate;
