import React from "react";
import { connect } from 'react-redux'
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";

const VideoButtons = (props) => {

  const { connectOnlyWithAudio } = props

  return (
    <div className="video_buttons_container">
      <MicButton />
      {!connectOnlyWithAudio && <CameraButton />}
      <LeaveRoomButton />
      {!connectOnlyWithAudio && <SwitchToScreenSharingButton />}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStoreStateToProps)(VideoButtons);
