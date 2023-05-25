import React, { useState } from "react";
import bg from "../../images/volume/bg.png";
import overview from "../../images/mainmenu/Overview.png";
import Volumeover from "../../images/mainmenu/Overview volume selected.png";
import volumeimage from "../../images/mainmenu/modify Volume 30.png";
import overtime from "../../images/mainmenu/Overview time selected.png"
import Menustart from "../../videos/startup/START.mp4";
import { Link } from "react-router-dom";
import "./Menu.css";
function Volume() {
  const [showImage, setShowImage] = useState(false);
  const [showvolume, setshowhvolume] = useState(false);
  const [buttonhide, setbuttonhide] = useState(false);
  const [showvolumemage, setshowvolume] = useState(false);
  const [hidevideo, setHidevideo] = useState(false);
  const handleButtonClick = () => {
    setHidevideo(true);
  };
  const handlevolume = () => {
    setshowhvolume(true);
    setShowImage(false);
    setbuttonhide(true);
  };
  const handlevolumeimage = () => {
    setshowvolume(true);
    setbuttonhide(true);
  };
  const handleVideoEnded = () => {
    setHidevideo(false);
    setShowImage(true);
  };
  return (
    <div>
      <div className="background-image-container">
        <img src={bg} alt="Background Image" />
        {!showImage ? (
          <>
          {
            !buttonhide && (
                <button className="button" onClick={handleButtonClick}>
              ok
            </button> 
            )
          }
      
          </>
        ) : (
          <>
            {showImage && (
              <>
                <div className="image-container">
                  <img src={volumeimage} alt="Displayed Image" />
                </div>
                <div>
                  <button className="button" onClick={handlevolume}>
                    ok
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {showvolume && (
        <>
          <div className="image-container">
            <img src={overtime} alt="Displayed Image" />
          </div>
          {buttonhide && (
            <Link to="/volume" className="down">
              down
            </Link>
            
          )}
        </>
      )}
      {hidevideo && (
            <video id="video_start" autoPlay muted onEnded={handleVideoEnded}>
              <source src={Menustart} type="video/mp4" />
            </video>
          )}
    </div>
  );
}
export default Volume;
