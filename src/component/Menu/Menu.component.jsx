import React, { useState } from "react";
import bg from "../../images/startup/bg-image.jpg";
import okaybutton from "../../images/mainmenu/Mainmenulist.png";
function Menu() {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };
  return (
    <div>
      <div className="background-image-container">
        <img src={bg} alt="Background Image" />
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
