import React, { useState} from 'react';
import {Image,Col} from 'react-bootstrap';
import { ImPlus,ImMinus } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import '../App.css';

function showmath(e) {
  // if(e!==)
e.target.classList.add("hidden");
e.target.parentElement.lastChild.className="d-block";
}

function opendetails(img,name,tags,description){
 var parentNode = document.createElement('div');
 parentNode.setAttribute("id", "myfood");
 parentNode.className="overlay";
 document.body.appendChild(parentNode);
//  parentNode.style.height="0%";
//  parentNode.style.transition="0.5s";

  var create_detail= `<div>
  <a href='#' class='close-btn d-flex justify-content-center align-self-center' 
  onClick={getElementById('myfood').style.height='0%';document.body.removeChild(getElementById('myfood'));}><span style="line-height:1">&times;</span></a>
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

          tags.map((tag)=> { return create_detail +=`<span class='tag'>${tag.text}</span>`;
          })

          create_detail += `</div>
          <p class='text-left m-1'>${description}</p>
        </div>
      </div>
    </div>
  </div>`;
  parentNode.innerHTML=create_detail;
  parentNode.style.height="100%";
}

const Foodtypedetails=({img,name,price,tags,description,result})=> {
const [count, setCount] = useState(0); 
const [totalRes, setTotalRes] = useState(0);

  return (
    <Col xm={12} sm={6} md={6} lg={4} xl={3} 
    className="p-2 d-flex justify-content-center">
    <div className="d-flex justify-content-center">
      {/* to make it one block */}
      <div className="food-detail-div">
        <Image className="food-detail-img" src={img} 
        onClick={(e)=>{opendetails(img,name,tags,description);}}/> 
        {/* { e } call as a parameter in opendetails() function to make 
        it correspond just for clicking this image */}
        <div className="div-details">
          <p className="food-detail-name align-self-start">{name}</p>
          <p className="food-detail-price align-self-end">
            {price}<span className="font-weight-bold"> &#8378;</span> </p>
          <button className="sell-btn" onClick={(e)=>showmath(e)}>
          <FaShoppingCart /></button>
         <div id="showpart" className="d-none">
          <div className="d-flex">
            
            <button id="minus" className="sell-btn-math col"
            onClick={() =>{setCount(count>0? count - 1 : 0);
               setTotalRes(count>0?totalRes - price:totalRes);result(totalRes)}}> 
            <ImMinus/></button>

            <button className="sell-btn-amount col">
            {count}
            </button>

            <button id="plus" className="sell-btn-math col"
            onClick={() => {setCount(count + 1); setTotalRes(totalRes + price);result(totalRes)}}> 
            <ImPlus /></button>

          </div>
          </div>
        </div>
      </div>
      </div>
      </Col>
  );
}

export default Foodtypedetails;


