import React from 'react';
import {Row,Container,Col,Image} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';

function Header({logo,rname,imgs}) {
  return (
    <div className="bg-color-header">
        <Container>
            <Row>
                <Col xm={6} className="p-2 d-flex justify-content-start align-items-center">
                <Image src={logo} rounded className="logo-img" />
                <p className="restaurant-name align-self-center d-flex mb-0">{rname}</p>
                {console.log(imgs)}
                </Col>
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

export default Header;
