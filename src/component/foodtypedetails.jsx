import React, { useState} from 'react';
import {Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function showmath(e) {
e.target.className="hidden";
e.target.parentElement.lastChild.className="d-block";
}

function opendetails(img,name,tags,description){
  var parentNode=document.getElementById("myfood");
  parentNode.style.height="100%";
  var create_detail= `<div class="">
  <a href='#' class='close-btn d-flex justify-content-center align-self-center' 
  onClick={document.getElementById('myfood').style.height='0%'}><span style="line-height:1">&times;</span></a>
  <div class='overlay-content'>
    <div class='container content'>
      <div class='row'>
        <div class='col-xs-12 col-md-6 p-0'>
          <img src=${img} class='img-details'/>
        </div>
        <div class='col-xs-12 col-md-6'>
          <p class='title-details'>${name}</p>
          <div class='mb-3'>
          <h6 class='text-left'>Ingredients</h6>`;

          tags.map((tag)=> {
            create_detail +=`<span class='tag'>${tag}</span>`;
          })

          create_detail += `</div>
          <p class='text-left m-1'>${description}</p>
        </div>
      </div>
    </div>
  </div>`;
  parentNode.innerHTML=create_detail;
}

function Foodtypedetails({img,name,price,tags,description}) {
const [count, setCount] = useState(0); 

  return (
    <div className="d-flex justify-content-center">
      {/* to make it one block */}
      <div>
        <Image className="food-detail-img" src={img} onClick={(e)=>opendetails(img,name,tags,description)}/> 
        {/* { e } call as a parameter in opendetails() function to make it correspond just for clicking this image */}
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
            onClick={() => count>0 ? setCount(count - 1): ""}
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


