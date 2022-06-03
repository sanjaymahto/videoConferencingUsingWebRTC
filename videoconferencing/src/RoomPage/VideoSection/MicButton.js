import React, { useState } from 'react'

import Mic from '../../resources/images/mic.svg'
import MicOff from '../../resources/images/micOff.svg'

const MicButton = (props) => {
    const [isMicMuted, setMicMute] = useState(false)

    const handleMicButton = () => {
        setMicMute(!isMicMuted)
    }

    return <div className="video_button_container">
        <img src={isMicMuted ? MicOff : Mic}
            alt="Mic Button"
            onClick={handleMicButton}
            className="video_button_image"
        />
    </div>
};

export default MicButton;
