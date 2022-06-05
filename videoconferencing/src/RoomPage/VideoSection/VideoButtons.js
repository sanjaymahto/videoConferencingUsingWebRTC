import React from "react";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";

const VideoButtons = (props) => {
  return (
    <div className="video_buttons_container">
      <MicButton />
      <CameraButton />
      <LeaveRoomButton />
      <SwitchToScreenSharingButton />
    </div>
  );
};

export default VideoButtons;
