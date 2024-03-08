import React from 'react';
import '../Styles/Cart.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function MyCart() {

    const navigate = useNavigate();
    const [orderdata,setOrderData] = useState('');

    let UserId = localStorage.getItem('id')

    // const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        const  Fetchcartdata= async () => {
            try {
                console.log(UserId);
                const response = await axios.get(`http://localhost:3003/UserCart/${UserId}`);
                setData(response.data);
            } catch (error) {
                console.error('Error Fetching Cart Data', error);
            }
        }; Fetchcartdata();
    }, [UserId]);

    const HandleRemove = async (ID) => {
        console.log('HandleCart');
        console.log(ID);
        try {
          let res =  await axios.delete(`http://localhost:3003/DeleteCart/${ID}`);
            // const updatedData = data.filter((item) => item.id !== ID);
            // setData(updatedData);
            // alert('Item Removed From Cart');
            console.log(res.data);
            const updatedData = data.filter((item) => item.ID !== ID);
            setData(updatedData);
        } catch (error) {
            console.error('Error Removing From cart', error);
        }
    };

    const handleorder = async () =>{
        try {
            if (data.length === 0) {
                alert('Your cart is empty. Add items to your cart before placing an order.');
                return;
            }

            const orderItems = data.map((item) => ({
                name: item.Name,
                price: item.Price * item.quantity,
            }));

            const totalPrice = orderItems.reduce((total, item) => total + item.price, 0);

            const orderData = {
                UserId,
                items: orderItems,
                total: totalPrice,
            };
            console.log(orderData);
            console.log(UserId);
            await axios.post(`http://localhost:3003/BookOrders/${UserId}`, orderData);

            // Clear the cart after successful order
            setData([]);
            alert('Order placed successfully!');

            // Fetch the order data after placing the order
            // const response = await axios.get('http://localhost:3003/ShowOrders', {
            //     params: { UserId }, // You might need to adjust the API endpoint or parameters
            // });

            // setOrderData(response.data); // Set the order data in state
            // navigate('/OrderDetails'); // Redirect to home or another page after placing the order
        } catch (error) {
            console.error('Error placing order', error);
            alert('Failed to place order. Please try again later.');
        }
    };


    const calculateTotalPrice = () => {
        return data.reduce((total, item) => total + (item.Price * item.quantity), 0);
    };
    return (
        <div>
            <div className='CartTitle'>
                <h3>My Cart</h3>
            </div>
            <div className='CartData'>
                <Row xs={1} md={2} lg={4}>
                    {data.map((cart) => (
                        <Col key={cart.id}>
                            <Card style={{ height: '500px', width: '300px', margin: '0px', border: '20px solid white' }} >
                                <Card.Img variant="top"
                                    src={cart.ItemImage}
                                    alt='FoodImage'
                                    style={{ height: '200px', width: '298px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'normal', color: 'black' }}><b>{cart.Name}</b></Card.Title>
                                    <Card.Text>
                                        <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                        </svg></b> {cart.Price}<br />
                                        Quantity:
                                        {/* <button id='Quantitydecrease' onClick={() => handleQuantityChange(cart.ID, cart.quantity - 1)}>-</button> */}
                                        {cart.quantity}
                                        {/* <button id='QuantityIncrease' onClick={() => handleQuantityChange(cart.ID, cart.quantity + 1)}>+</button><br /> */}
                                        <button id='b2' onClick={() => { HandleRemove(cart.ID) }}>Remove From Cart</button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="total-price">
                <h4>Total Price: {calculateTotalPrice()}</h4>
            </div>
            <div className='Orderbutton'>
                {/* <button id='backbutton' onClick={()=>{navigate('/RestaurantMenu')}}> Go Back</button> */}
            <button id='b1' className="order-button" onClick={handleorder}>Order Now</button>
            </div>
        </div>
    )
}