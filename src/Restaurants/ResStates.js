import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../Restaurants/Restaurant.css'
import s1 from '../Images/s1.jpg'
import s2 from '../Images/s2.jpg'
import s3 from '../Images/s3.jpg'
import s4 from '../Images/s4.jpg'
import s5 from '../Images/s5.jpg'
import s6 from '../Images/s6.jpg'
import s7 from '../Images/s7.jpg'
import s8 from '../Images/s8.jpg'
import s9 from '../Images/s9.jpg'
import s10 from '../Images/s10.jpg'
import { useNavigate } from 'react-router-dom';
import CountrySelector from '../Restaurants/ResStateSelector'

export default function ResStates() {
  const navigate = useNavigate();
  return (
    <div>
        <div>
      <div className="container3">
        <CountrySelector />
      </div>
      <div className="carouselPart2">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s4} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s5} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s6} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s7} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s8} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s9} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100" src={s10} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    <div className='backbutton'>
              <button onClick={()=>{navigate('/Restaurants')}}>Go Back</button>
            </div>
</div>
  )
}
