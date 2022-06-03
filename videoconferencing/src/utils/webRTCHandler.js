import store from '../store/store'
import { showOverlay } from '../store/actions';
import * as wss from './wss'
// Audio and Video Configuration
const defaultConstraints = { audio: true, video: true }

let localStream;

export const getLocalPreviewAndInitRoomConnection = (
    isRoomHost,
    identity,
    roomId = null
) => {
    navigator.mediaDevices.getUserMedia(defaultConstraints).then(stream => {
        console.log('Successfully received local stream')
        localStream = stream
        showLocalVideoPreaview(localStream)
        //Dispatch an action to hide overlay
        store.dispatch(showOverlay(false))
        isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(roomId, identity)
    }).catch(err => {
        console.log('error occurred when trying to get an accesss to an local stream')
        console.log(err)
    })
}

const showLocalVideoPreaview = (stream) => {
    // show Local video Preview
}