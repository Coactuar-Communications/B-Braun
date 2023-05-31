import React, { useState } from "react";
import mainMenu from "../../images/startup/B-BRAUN MAIN MENU.png";
import okaybutton from "../../images/mainmenu/Overview.png";
function Menu() {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };
  return (
    <div>
      <div className="background-image-container">
        <img src={mainMenu} alt="Background Image" />
        {!showImage && (
          <button className="button" onClick={handleButtonClick}>
            ok
          </button>
        )}

        {showImage && (
          <div className="image-container">
            <img src={okaybutton} alt="Displayed Image" />
          </div>
        )}
      </div>
    </div>
  );
}
export default Menu;
