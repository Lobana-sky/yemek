import React from 'react';
import Header from '../component/header';
import Foodtype from '../component/foodtype';
import union from '../Union.svg';
import fish from '../fish.svg';
import '../App.css';


// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("food-type-component");
console.log(btns);
// var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


var type_food=[
  {
image:union,
name:"food1"
},
{
image:fish,
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
image:union,
name:"food5"
},
]

function home() {
  return (
    <div className="home-style">
      <Header></Header>
      <div className="foodtypes">
      {type_food.map((kind)=><a href="#"><Foodtype food={kind.image} name={kind.name}></Foodtype></a>)}
      </div>
    </div>
  );
}

export default home;

