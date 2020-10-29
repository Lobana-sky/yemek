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
  // getCategoriesInfo();
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

// const getCategoriesInfo = async()=>{
//   const response = await fetch(`https://admin.yemix.net/ar/api/v1/restaurants/5184d88585/categories/${dId}/products`);
//   console.log(response);
//   const data = await response.json();
//   setCategoriesInfo(data.data);
// }

//   // var foodKind = document.getElementsByClassName('food-type-component');
//   for (i = 0; i < foodKind.length; i++) {
//     foodKind[i].addEventListener("click", function(){
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//   setDId(document.getElementsByClassName('active')[0].id);
//   const getCategoriesInfo = async()=>{
//     const response = await fetch(`https://admin.yemix.net/ar/api/v1/restaurants/5184d88585/categories/${dId}/products`);
//     console.log(response);
//     const data = await response.json();
//     setCategoriesInfo(data.data);
//   }
// getCategoriesInfo();
//     });
//   }


// // const [categoriesInfo,setCategoriesInfo]=useState([]);
// // const [allCategories,setAllCategories]=useState([]);
// // var allCategories=[];
// const [dId,setDId]=useState(5);

// const getAllCategories=async ()=>{
//   var foodKind = document.getElementsByClassName('food-type-component');
// setTimeout(async ()=>{
//   for (var i = 0; i < foodKind.length; i++) {
//     console.log(i);
//     const response = 
//     await fetch(`https://admin.yemix.net/ar/api/v1/restaurants/5184d88585/categories/${foodKind[i].id}/products`);
//     const data = await response.json();
//    setAllCategories(allCategories.push(data.data));
//   }//end for
//     console.log("allgetfunc",allCategories);
//     // setDId(3);
// }
//   ,1000)
// }
// console.log("allout",allCategories);


// console.log("dId",dId);
// console.log("allCategories[dId]",allCategories[dId]);

//   const getCategoriesInfo = async(dId)=>{
    
//     setCategoriesInfo(allCategories[dId]);
//     console.log(allCategories);
//     console.log(categoriesInfo);

//   }
// useEffect(()=>{
//   getHeadInfo();
//   getFoodInfo();
  
//   getAllCategories()
// getCategoriesInfo(dId);


//   console.log(allCategories)
//   // getCategoriesInfo();

// },[]);
// // [] to run one time 
// // only when head Info is changed it will render again