import React from 'react';
import Header from '../component/header';
import Foodtype from '../component/foodtype';
import union from '../Union.svg';
import fish from '../fish.svg';
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
name:"fish"
},
{
  image:fish,
name:"fish2"
},
{
  image:fish,
name:"fish4"
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

