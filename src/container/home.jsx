import React from 'react';
import Header from '../component/header';
import Foodtype from '../component/foodtype';
import union from '../Union.svg';
import fish from '../fish.svg';
import '../App.css';


// Add active class to the current (foodtypesElements)
window.addEventListener('load', (event) => {
var foodtypesElements = document.getElementsByClassName("food-type-component");
for (var i = 0; i < foodtypesElements.length; i++) {
  foodtypesElements[i].addEventListener("click", function(){
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
name:"food1"
},
{
  image:union,
name:"food2"
},
{
  image:fish,
name:"food3"
},
{
  image:fish,
name:"food4"
},
{
  image:fish,
name:"food5"
},
]
//data

function home() {
  return (
    <div className="home-style">
      <Header></Header>
      <div id="foodtypes">
      {type_food.map((kind,i)=>
      <a href="#" key={kind.name}><Foodtype key={kind.name} img={kind.image} name={kind.name} nclass={i === 0 ? "active":" "}/></a>)
      }
      </div>
    </div>
  );
}

export default home;

