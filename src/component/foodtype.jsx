import React from 'react';
import {Image} from 'react-bootstrap';
import '../App.css';

const Foodtype=({img,name,nclass,id})=> {
  return (
    <div className={`food-type-component${nclass}`} id={id}>
        <div className="p-0" >
          <div className="divimg">
            <Image className="food-img" src={img}/>
          </div>
            <p className="food-type-text">{name}</p>
        </div>
    </div>
  );
}

export default Foodtype;
