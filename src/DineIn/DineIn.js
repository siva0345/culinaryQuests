import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Country from '../DineIn/DineInCountry'
import india from '../Images/india.jpg'
import china from '../Images/china.jpg'
import usa from '../Images/usa.jpg'
import german from '../Images/german.jpg'
import france from '../Images/france.jpg'
import c1 from '../Images/c1.jpg'
import c2 from '../Images/c2.jpg'
import c3 from '../Images/c3.jpg'
import c4 from '../Images/c4.jpg'
import c5 from '../Images/c5.jpg'
import c6 from '../Images/c6.jpg'
import c7 from '../Images/c7.jpg'
import c8 from '../Images/c8.jpg'
import c9 from '../Images/c9.jpg'
import c10 from '../Images/c10.jpg'
import '../Restaurants/Restaurant.css'
import { useNavigate } from 'react-router-dom'

export default function DineIn() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='downbody'>
          <div>
            <div className='countries'>
              < Country/>
            </div>
            <div className='carouselPart'>
              <Carousel fade >
              <Carousel.Item>
                  <img className="d-block" src={c5} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={german} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={c6} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={c4} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block" src={usa} alt="Fourth slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={c3} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={c7} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block" src={france} alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={c8} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={c2} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block" src={china} alt="Fourth slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={c1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={c9} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block" src={india} alt="Fifth slide"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={c10} alt="First slide"/>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div>
            <button  id='HomeRedirect' onClick={()=>{navigate('/')}}>Go Back</button>
          </div>
    </div>
  )
}
