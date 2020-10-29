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
const getHeadInfo = async()=>{
  const response = await fetch('https://admin.yemix.net/ar/api/v1/restaurants/328e69ac91/');
  const data = await response.json();
  setHeadInfo(data.data);
}

const getFoodInfo = async()=>{
  const response = await fetch('https://admin.yemix.net/ar/api/v1/restaurants/5184d88585/categories?type=food-category');
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