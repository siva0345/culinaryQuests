import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function MyOrders() {
    // const location = useLocation();
    // const parent = location.state?.data || {};
    let UserId = localStorage.getItem('id')

    const [OrderData,setOrderData]= useState('')
    const navigate = useNavigate();
    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                console.log(UserId);
                const response = await axios.get(`http://localhost:3003/BookOrders/${UserId}`);
                console.log(response.data);
                setOrderData(response.data);
            } catch (error) {
                console.error('Error Fetching Orders Data', error);
            }
        }; fetchOrderData();
}, []);
  return (
    <div className='MyOrders'>
        <div className='Orderdetails'>
            <h2>MyOrders</h2>
            <table className='table table-hover'>
                <tbody>
                {Array.isArray(OrderData) &&
                            OrderData.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.Name}</td>
                                    <td>{order.Price}</td>
                                </tr>
                            ))}
                </tbody>
            </table>

        </div>
        <div className='backbutton'>
            <button onClick={()=>{navigate('/')}}>Go Back</button>
        </div>
    </div>
  )
}
