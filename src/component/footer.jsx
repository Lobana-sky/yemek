import React from 'react';
import {Image} from 'react-bootstrap';
import fish from '../images/fish.svg';
import '../App.css';

function Footer() {
  return (
    <div className="d-flex justify-content-center">
        <Image className="footer-img" src={fish} /> 
    </div>
  );
}

export default Footer;
