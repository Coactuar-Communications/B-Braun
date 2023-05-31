import React, { useState } from "react";
import bg from "../../images/startup/bg-image.jpg";
import okaybutton from "../../images/mainmenu/Mainmenulist.png";
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
