import React from 'react';
import logo from '../brand-logo.png';
import {Row,Container,Col,Image} from 'react-bootstrap';
import '../App.css';

function foodtype() {
  return (
    <div className="food-type-component">
      <Container>
            <Row>
                <Col>
                  <div className="divimg">
                   <Image className="food-img" src={logo} roundedCircle />
                  </div>
                <p className="food-type-text">Name</p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default foodtype;
