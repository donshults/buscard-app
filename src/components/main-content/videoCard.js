import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import VideoPlayer from "../videoplayer";

const subTitleStyle = {
  'margin-bottom': '1em'
};

const VideoCard = (props) => {
     const test = this.props;
     return (
      /* <div>
        <Card>
          <VideoPlayer />
          <CardBody>
            <CardTitle>{props.contact.businessOwner}</CardTitle>
            <CardSubtitle style={subTitleStyle}> {props.contact.eMailAddress}</CardSubtitle>
            <CardSubtitle style={subTitleStyle}>{contact.mobilePhone}</CardSubtitle>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>*/
      <div>Contact: {test} </div>
    )

}

export default VideoCard;