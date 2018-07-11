import React from 'react'
import ReactPlayer from 'react-player';
import './Videoplayer.css';

const VideoPlayer = (props) => {
   
    return (
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={props.vidUrl}
          width='100%'
          height='100%'
          muted
          playing
          controls
        />
      </div>
    )
}

export default VideoPlayer;