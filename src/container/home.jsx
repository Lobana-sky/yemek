import React from 'react';
import Header from '../component/header';
import Foodtype from '../component/foodtype';
import union from '../images/Union.svg';
import fish from '../images/fish.svg';
import foodimg from '../images/food.jpg';
import Fooddetail from '../component/foodtypedetails';
import {Row,Container,Col} from 'react-bootstrap';

import '../App.css';


// Add active class to the current (food kinds)
window.addEventListener('load', (event) => {
var foodKind = document.getElementsByClassName("food-type-component");
for (var i = 0; i < foodKind.length; i++) {
  foodKind[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
});

//data
const type_food=[
  {
    image:fish,
name:"fish"
},
{
  image:union,
name:"union"
},
{
  image:fish,
name:"fish5"
},
{
  image:fish,
name:"fish2"
},
{
  image:fish,
name:"fish4"
},
];

const type_food_details=[
  {
    image:foodimg,
name:"fish",
price:20
},
{
  image:foodimg,
name:"union",
price:30
},
{
  image:foodimg,
name:"fish5",
price:20
},

]
//data

function home() {
  return (
    <div className="home-style">
      {/* restaurant name + languages */}
      <Header />
      {/* restaurant name + languages */}  


      {/* food typs  */}
      <div id="foodtypes">
      {type_food.map((kind,i)=>
      <a href="#" key={kind.name}><Foodtype img={kind.image} name={kind.name} nclass={i === 0 ? "active":""}/></a>)
      }
      </div>
      {/* food typs  */}


      {/* food type details */}
      <Container fluid>
            <Row>
            {type_food_details.map((detail)=>
              <Col key={detail.name} xm={12} md={6} lg={4} className="p-2 d-flex align-items-center">
              <Fooddetail img={detail.image} name={detail.name} price={detail.price}/>
              </Col>
              )
            }
            </Row>
        </Container>
      {/* food type details */}


    </div>
  );
}

export default home;

