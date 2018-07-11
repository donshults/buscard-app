import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const subTitleStyle = {
  marginBottom: '1em'
};

const VideoCard = (props) => {
  var videoCard = null;
  if (props.mycontact) {
    videoCard = (<Card>
      <VideoPlayer vidUrl={props.mycontact.videoUrl} />
      <CardBody>
        <CardTitle>{props.mycontact.businessOwner}</CardTitle>
        <CardSubtitle style={subTitleStyle}>{props.mycontact.eMailAddress}</CardSubtitle>
        <CardSubtitle style={subTitleStyle}>{props.mycontact.mobilePhone}</CardSubtitle>
        <Button>Button</Button>
      </CardBody>
    </Card>
    )
  }
  return (
    <div data-test='videocard-component'>
      {videoCard}
    </div>

  )

}

export default VideoCard;