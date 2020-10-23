import React from 'react';
import logo from '../brand-logo.png';
import Header from '../component/header';
import Foodtype from '../component/foodtype';
import '../App.css';

function home() {
  return (
    <div className="home-style">
      <Header></Header>
      <div className="foodtypes">
      {[1,2,3,4,5,6,7,8,9,10,11,12].map(()=><a href="#"><Foodtype></Foodtype></a>)}
      </div>
    </div>
  );
}

export default home;

