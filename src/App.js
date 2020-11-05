import React,{useState,useEffect} from 'react';
import Home from './container/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
const [headInfo,setHeadInfo]=useState({});
const [foodCategories,setFoodCategories]=useState([]);

useEffect(()=>{
  getHeadInfo();
  getFoodInfo();
},[]);
// [] to run one time 
// only when head Info is changed it will render again
let Basic_Url="https://admin.yemix.net/";
let Languages_option="en";
let Restaurant_Id="5184d88585"
const getHeadInfo = async()=>{
  const response = await fetch(`${Basic_Url}${Languages_option}/api/v1/restaurants/${Restaurant_Id}/`);
  const data = await response.json();
  setHeadInfo(data.data);
}

const getFoodInfo = async()=>{
  const response = await fetch(`${Basic_Url}${Languages_option}/api/v1/restaurants/${Restaurant_Id}/categories?type=food-category`);
  const data = await response.json();
  setFoodCategories(data.data);
}

  return (
    <div className="home-style">
      <Home headInfo={headInfo} foodCategories={foodCategories} />
    </div>
  );
}

export default App;