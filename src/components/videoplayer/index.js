import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import './videoplayer.css';

class  VideoPlayer extends Component {
  render () {
    
    return (
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={['http://lp.collaborationsecrets.com.s3-us-west-2.amazonaws.com/video/jasonstein/JasonStein.mp4']}
          width='100%'
          height='100%'
          muted
          playing
          controls
        />
      </div>
    )
  }

}

export default VideoPlayer;