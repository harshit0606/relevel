import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Img1 from "../../Assets/c1.jpg";
import Img2 from "../../Assets/c2.jpg";
import Img3 from "../../Assets/c3.jpg";
import "./carousel.css";
function Carousell() {
  return (
    <div className='carousel_div'>
    <Carousel>
    <Carousel.Item>
      <img
        className="carousel_img"
        src={Img1}
        alt="First slide"
      />
    
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carousel_img"
        src={Img2}
        alt="Second slide"
      />
  
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carousel_img"
        src={Img3}
        alt="Third slide"
      />
  
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default Carousell;