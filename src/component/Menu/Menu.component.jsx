import React, { useState } from "react";
import bg from "../../images/startup/bg-image.jpg";
import okaybutton from "../../images/startup/INJECTION RATE SELECTION.png";
function Menu() {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };
  return (
    <div>
      <div className="background-image-container">
        {/* Render your background image here */}
        <img src={bg} alt="Background Image" />
        {/* <button className="button">Click Me</button> */}
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
