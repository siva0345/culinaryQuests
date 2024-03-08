import React, { useState, useEffect } from 'react';
import CalendarComponent from '../DineIn/Calender';
import CustomTimePicker from '../DineIn/Time';
import axios from 'axios';
import m1 from '../Images/menuimg.jpg'
import { useLocation } from 'react-router-dom';
import '../Styles/DineIn.css';
import { useNavigate } from 'react-router-dom';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

export default function DineInBook() {
  const navigate = useNavigate();
  const [Preference, setPreference] = useState('');
  const [TableSize, setTableSize] = useState('');
  const [SelectedDate, setSelectedDate] = useState('');
  const [SelectedTime, setSelectedTime] = useState('10:00:00 am');

  const location = useLocation();
  const parent = location.state?.data || {};
  const [restaurantData, setRestaurantData] = useState({});

  const handlePreferenceChange = (event) => {
    setPreference(event.target.value);
  };

  const handleTableSizeChange = (event) => {
    setTableSize(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('SelectedTime:', SelectedTime);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  useEffect(() => {
    const fetchResData = async () => {
      try {
        const response1 = await axios.get(`http://localhost:3003/ShowRes/${parent.id}`);
        console.log(response1.data);
        setRestaurantData(response1.data);
      } catch (error) {
        console.error('Error Fetching Restaurant Data', error);
      }
    };
    fetchResData();
  }, [parent.id]);

  let UserID = localStorage.getItem('id')
  console.log(UserID);
  const handleSubmit = async () => {
    console.log('BookData');
    try {
        await axios.post('http://localhost:3003/BookDineIn', {
            UserID,
            Preference,
            TableSize,
            SelectedDate,
            SelectedTime,
        });
        console.log('Added to cart:',UserID,);
        console.log('SelectedTime:', SelectedTime);
        alert('Reservation submitted successfully!');
        navigate('/DineInDetails');
    } catch (error) {
        console.error('Failed to submit reservation.', error);
    }
};

  return (
    <div className='DineInBody'>
      <div className='DetailsBody'>
        <div className='Detailsimamge'>
          <img src={m1} alt='Menu' />
        </div>
        <div className='Detailsres'>
          <div className='Detailsresdata'>
            <div className='resimg'>
              <img src={restaurantData.Image} alt='resimage' />
            </div>
            <div className='resdata'>
              <h1>{restaurantData.Name}</h1>
              <p> <h4>Cuisines:</h4>
                {restaurantData.Cuisines} <br />
                <h4>Timings:</h4>
                {restaurantData.Timings}
              </p>
            </div>
            <div className='resloc'>
              <h4>Location:</h4>
              <p>{restaurantData.Location}</p>
            </div>
          </div>
        </div>
        <div className='BookingForm'>
          <form>
            <div className='FirstRow'>
              <div className="form-group col-md-4">
                <label htmlFor="inputState1">Preference</label>
                <select id="inputState1" className="form-control" onChange={handlePreferenceChange}>
                  <option selected>Choose...</option>
                  <option>Buffet</option>
                  <option>Pizzeria</option>
                  <option>Roof Top</option>
                  <option>Private Dining</option>
                  <option>Casual Dining</option>
                </select>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="inputState2">Table for</label>
                <select id="inputState2" className="form-control" onChange={handleTableSizeChange}>
                  <option selected>Choose...</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>8</option>
                  <option>8+</option>
                </select>
              </div>
            </div>
            <div className='SecondRow'>
              <div className="form-group col-md-4">
                <label htmlFor="inputDate">Date</label><br />
                <CalendarComponent onDateChange={handleDateChange} />
              </div>
              <div className='timer'>
      <label> select Time</label>
      <CustomTimePicker
        value={SelectedTime} // Use 'value' instead of 'defaultValue'
        onChange={handleTimeChange}
      />
    </div>
            </div>

          </form>
          <div className='button'>
            <button  id='backbutton' onClick={() => { navigate('/DineIn/telangana/hyderabad') }}>Go Back</button>
            <button id='bookbutton' type="button" onClick={handleSubmit}>  Book Table </button>
            {/* <button id='detailsbutton' type='button' onClick={()=>{navigate('/DineInDetails')}}> Details</button> */}
          </div>

        </div>

      </div>
    </div>
  );
}