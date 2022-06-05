import React, { useState } from "react";
import SwitchImg from "../../resources/images/switchToScreenSharing.svg";

const SwitchToScreenSharingButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleScreenShareToggle = () => {
    setIsScreenSharingActive(!isScreenSharingActive);
  };

  return (
    <div className="video_button_container">
      <img
        src={SwitchImg}
        onClick={handleScreenShareToggle}
        className="video_button_image"
      />
    </div>
  );
};

export default SwitchToScreenSharingButton;
