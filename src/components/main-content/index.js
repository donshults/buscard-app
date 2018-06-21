import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import propTypes from "prop-types";
import './main-content.css';
import VideoCard from './videoCard';


class MainContent extends Component {
    constructor(props){
        super(props);
        this.state = props;
    
    }
    render() {

        if(this.props){
            console.log("Main Content: "+ this.state.contact)
        }
        return (
            <div className="content">
                <Container fluid>
                    <Row>
                        <Col md={{ size: 8, offset: 2}} >
                            <VideoCard contact={this.state.contact} />
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}


export default MainContent;