import React from 'react';
import {Image} from 'react-bootstrap';
import '../App.css';


/* Open */

  
  /* Close */
//   function closedetails(e) {
//     //   e.target.style.display="none";
//     //   document.getElementById("myfood").style.width = "0%";
//     e.target.style.width="0%";

//     // document.getElementById("myfood").style.display = "none";
//   }
//   {img,name,tags,description}
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
