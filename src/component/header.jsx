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
                <Col xm={4} className="m-2">
                <Image src={logo} rounded />
                <p className="d-inline pl-2">Restaurant Name</p>
                </Col>
                <Col xm={{ span: 4, offset: 4 }} className="p-2">
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
