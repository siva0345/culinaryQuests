import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../Restaurants/RestaurantData.css'
import { Card, Row, Col } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function DineInResData() {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    // const history = useHistory()
    useEffect(() => {
      const restuarantdata = async () => {
        try {
          const response = await axios.get('http://localhost:3003/ShowData');
          setData(response.data);
        } catch (error) {
          console.error('Error Fetching Data', error);
        }
      }; restuarantdata();
    }, []);
  
    function HandleClick(id) {
      console.log(id)
      navigate(`/BookDineIn`, { state: { data: { id } } })
    };
    return (
      <div className='container'>
        <div className='RestaurantDataBody'>
          <div className='CityTitle'>
            <h3>Hyderabad</h3>
          </div>
          <div className='Restaurants-Data'>
            <Row xs={1} md={2} lg={4}>
              {data.map((restaurantData) => (
                <Col key={restaurantData.id}>
                  <Card style={{ height: '500px', width: '300px', margin: '0px', border: '20px solid white' }} onClick={() => { HandleClick(restaurantData.ID) }} >
                    <Card.Img variant="top"
                      src={restaurantData.Image}
                      alt='RestaurantImage'
                      style={{ height: '200px', width: '298px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: 'normal', color: 'black' }}><b>{restaurantData.Name}</b></Card.Title>
                      <Card.Text>
                        <b>Location:</b> {restaurantData.Location}<br />
                        {/* <b>Cuisines:</b> {restaurantData.Cuisines}<br/>
                        <b>Timings:</b> {restaurantData.Timings}<br/> */}
                      </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                     {restaurantData.Cuisines}<br/>
                     {restaurantData.Timings}
                    </Card.Footer> */}
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className='backbutton'>
            <button onClick={() => { navigate('/DineInStates') }}>Go Back</button>
          </div>
        </div>
      </div>
    );
  }