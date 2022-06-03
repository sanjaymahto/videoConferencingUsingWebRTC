import React, { useEffect } from "react";
import { connect } from 'react-redux';
import ChatSection from "./ChatSection/ChatSection";
import VideoSection from "./VideoSection/VideoSection";
import ParticipantSection from "./ParticipantSection/ParticipantSection";
import Overlay from './Overlay'
import RoomLabel from "./RoomLabel";
import * as webRTCHandler from '../utils/webRTCHandler';

import './RoomPage.css'

const RoomPage = ({ roomId, identity, isRoomHost, showOverlay }) => {

  useEffect(() => {
    webRTCHandler.getLocalPreviewAndInitRoomConnection(isRoomHost,
      identity,
      roomId)
  }, [identity, isRoomHost, roomId])

  return (<div className="room_container">
    <ParticipantSection />
    <VideoSection />
    <ChatSection />
    <RoomLabel roomId={roomId} />
    {showOverlay && <Overlay />}
  </div>)
};

const mapStoreStateToProps = (state) => {
  return {
    ...state
  }
}



export default connect(mapStoreStateToProps)(RoomPage);
