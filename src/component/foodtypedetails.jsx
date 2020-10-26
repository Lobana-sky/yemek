import React, { useState } from 'react';
import {Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


function showmath(e) {
e.target.className="hidden";
e.target.parentElement.lastChild.className="d-block";
}


function Foodtypedetails({img,name,price}) {
const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center">
      {/* to make it one block */}
      <div>
        <Image className="food-detail-img" src={img}/>
        <div className="div-details">
          <p className="food-detail-name align-self-start">{name}</p>
          <p className="food-detail-price align-self-end">${price}</p>
          <button className="sell-btn" onClick={(e)=>showmath(e)}><FontAwesomeIcon icon={faCoffee} /></button>
         <div id="showpart" className="d-none">
          <div className="d-flex">
            <button className="sell-btn-math col" 
            onClick={() => setCount(count + 1)}
            >
              <FontAwesomeIcon icon={faCoffee} /></button>
            <button className="sell-btn-amount col">
              {count}
              </button>
            <button className="sell-btn-math col" 
            onClick={() => setCount(count - 1)}
            >
              <FontAwesomeIcon icon={faCoffee} /></button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foodtypedetails;
