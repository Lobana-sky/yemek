import React from 'react';
import {Image} from 'react-bootstrap';
import '../App.css';


function Popupfooddetail() {
  return (
        <div className="overlay">
            <a href="#" className="close-btn"
            onClick={document.getElementsByClassName("overlay").style.display="none"}>&times;</a>
            <div className="overlay-content">
                <a href="#">About</a>
            </div>
        </div>
  );
}

export default Popupfooddetail;
