import React,{useState,useEffect} from 'react';
import {Row,Container,Col} from 'react-bootstrap';
import Header from '../component/header';
import Foodtype from '../component/foodtype';
import Footer from '../component/footer';
import Fooddetail from '../component/foodtypedetails';
import ResultBtn from '../component/resultbtn';
import '../App.css';

const Home=({headInfo,foodCategories}) => {

const [categoriesInfo,setCategoriesInfo]=useState([]);
const [categoryId,setCategoryId]=useState(34);

const getCategoriesInfo = async()=>{
  const response = 
  await fetch(`https://admin.yemix.net/ar/api/v1/restaurants/5184d88585/categories/${categoryId}/products`);
  const data = await response.json();
  setCategoriesInfo(data.data);
  console.log(categoriesInfo);
}
  


  var foodKind = document.getElementsByClassName('food-type-component');
  for (var i = 0; i < foodKind.length; i++) {
    foodKind[i].addEventListener("click", function(i){
      i.preventDefault();
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var ncurrent = document.getElementsByClassName("active");
      var idn=ncurrent[0].id;
      console.log(idn);
      setCategoryId(idn);
    });
  }//end for
  console.log(categoryId);
  useEffect(()=>{
    getCategoriesInfo();
  },[categoryId]);
  // [] to run one time 
// only when categoryId is changed it will render again

  return (
    <div className="home-style">
      {/* restaurant name + languages */}
      <Header logo={headInfo.logo} rname={headInfo.title} 
      tr={headInfo.locales!==undefined?headInfo.locales[2].flag:""} ar={headInfo.locales!==undefined?headInfo.locales[0].flag:""}
      en={headInfo.locales!==undefined?headInfo.locales[1].flag:""}
      />
      {/* restaurant name + languages */}  
      {/* food typs  */}
      <div id="foodtypes">
      {foodCategories!==undefined?foodCategories.map((kind,i)=>
      <a href="#/action-5" key={i}><Foodtype id1={i} id={kind.id} img={kind.icon}
       name={kind.title} nclass={i===0?" active":""}/>
      </a>):""}
      </div>

      <Container>
            <Row>
            {categoriesInfo!==undefined?categoriesInfo.map((detail,i)=>
              <Col key={i} xm={12} md={6} lg={4} xl={3} className="p-2 d-flex justify-content-center">
                <Fooddetail img={detail.cover} name={detail.title} price={detail.price.raw} 
                tags={detail.tag} description={detail.description}/>
              </Col>):""}
            </Row>
        </Container>
      {/* food type details */}
<ResultBtn result="21"/>
<Footer />
    </div>
  );
}

export default Home;

