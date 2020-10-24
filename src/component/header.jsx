import React from 'react';
import logo from '../brand-logo.png';
import {Row,Container,Col,Image} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';

function header() {
  return (
    <div className="bg-color-header">
        <Container>
            <Row>
                <Col xm={6} className="m-1 d-flex justify-content-start align-items-center">
                <Image src={logo} rounded />
                <p className="restaurant-name align-self-center d-flex mb-0">Restaurant Name</p>
                </Col>
                {/* <Col xm={2}></Col> */}
                {/* <Col xm={{ span: 3, offset: 1 }} className="p-2"> */}
                <Col xm={6} className="p-2 d-flex justify-content-end">
                <DropdownButton id="dropdown-basic-button" title="English">
                    <Dropdown.Item href="#/action-1">Arabic</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Turkish</Dropdown.Item>
                </DropdownButton>  
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default header;
