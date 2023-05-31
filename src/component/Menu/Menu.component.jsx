import React, { useState } from "react";
import mainMenu from "../../images/startup/B-BRAUN MAIN MENU.png";
import okaybutton from "../../images/mainmenu/Overview.png";
import bg from "../../images/mainmenu/bg.png";
import { Link } from "react-router-dom";
import "./Menu.css";
function Menu() {
  const [showImage, setShowImage] = useState(false);
  const [buttonhide, setbuttonhide] = useState(false);
  const handleButtonClick = () => {
    setShowImage(true);
  };
  return (
    <div>
      <div className="background-image-container">
        <img src={mainMenu} alt="Background Image" />
        {!showImage && (
          <>
          <Link to="/rate" className="button">
              Ok
            </Link> 
          </>
          )} 
      </div>
    </div>
  );
}
export default Menu;
