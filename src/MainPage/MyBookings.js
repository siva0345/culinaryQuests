import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function MyBookings() {
    // const location = useLocation();
    // const parent = location.state?.data || {};
    let UserId = localStorage.getItem('id')
    const [OrderData,setOrderData]= useState('')
    const navigate = useNavigate();
    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                console.log(UserId)
                const response = await axios.get(`http://localhost:3003/ShowDines/${UserId}`);
                console.log(response.data);
                setOrderData(response.data);
            } catch (error) {
                console.error('Error Fetching Orders Data', error);
            }
        }; fetchOrderData();
}, []);
  return (
    <div>
        <div className='MyOrders'>
        <div className='Orderdetails'>
            <h2>My Bookings</h2>
            <table className='table table-hover'>
                <tbody>
                {Array.isArray(OrderData) &&
                            OrderData.map((order) => (
                                <tr key={order.id}>
                                    <td>Preference:{order.Preference}</td>
                                    <td>TableSize:{order.TableSize}</td>
                                    <td>SelectedDate:{order.SelectedDate}</td>
                                    <td>SelectedTime:{order.SelectedTime}</td>
                                </tr>
                            ))}
                </tbody>
            </table>

        </div>
        <div className='backbutton'>
            <button onClick={()=>{navigate('/')}}>Go Back</button>
        </div>
    </div>
  </div>
  )}