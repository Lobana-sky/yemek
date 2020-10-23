import React from 'react';
import {Image} from 'react-bootstrap';
import '../App.css';

function foodtype({img,name}) {
  return (
    <div className="food-type-component">
        <div className="p-0">
          <div className="divimg">
            <Image className="food-img" src={img}/>
          </div>
  <p className="food-type-text">{name}</p>
        </div>
    </div>
  );
}

export default foodtype;
