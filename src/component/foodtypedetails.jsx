import React from 'react';
import {Image} from 'react-bootstrap';
import '../App.css';

function foodtypedetails({img,name,price}) {
  return (
    <div className="">
        <Image className="food-detail-img" src={img}/>
          {/* <div className="divimg">
            <Image className="food-img" src={img}/>
          </div>
            <p className="food-type-text">{name}</p> */}
        <div className="div-details">
        <p className="food-detail-name align-self-start">{name}</p>
        <p className="food-detail-price align-self-end">${price}</p>
        <button className="sell-btn">Warning</button>
        </div>
       
    </div>
  );
}

export default foodtypedetails;
