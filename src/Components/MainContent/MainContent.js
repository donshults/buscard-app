import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './MainContent.css';
import VideoCard from '../VideoCard/VideoCard';


const MainContent = (props) => {
    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} >
                    <VideoCard mycontact={props.featuredContact} />              
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
/*


*/
export default MainContent;