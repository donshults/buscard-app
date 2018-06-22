import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const subTitleStyle = {
  marginBottom: '1em'
};

const VideoCard = (props) => {
     console.log("VideoCard "+ props)
     return (
       <div>
        <Card>
        <VideoPlayer vidUrl={props.mycontact.videoUrl} />
          <CardBody>
            <CardTitle>{props.mycontact.businessOwner}</CardTitle>
            <CardSubtitle style={subTitleStyle}>{props.mycontact.eMailAddress }</CardSubtitle>
            <CardSubtitle style={subTitleStyle}>{props.mycontact.mobilePhone}</CardSubtitle>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

    )

}

export default VideoCard;