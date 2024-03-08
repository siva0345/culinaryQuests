import React, { useState } from 'react';
import './Details.css';
import axios from 'axios';
// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function DineInDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const parent = location.state?.data || {};
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expirationDate: '',
        cvv: '',
    });
    const [userData, setUserData] = useState({
        name: '',
        phoneNumber: '',
        address: '',
    });
    const [phoneNumberChanged, setPhoneNumberChanged] = useState(false);
    const [cardNumberChanged, setCardNumberChanged] = useState(false);
    const [cvvChanged, setCVVChanged] = useState(false);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleCardDetailsChange = (event) => {
        const { name, value } = event.target;
        setCardDetails({
            ...cardDetails,
            [name]: value,
        });
        if (name === 'cardNumber') {
            setCardNumberChanged(true);
        } else if (name === 'cvv') {
            setCVVChanged(true);
        }
    };

    const handleUserDataChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        if (name === 'phoneNumber') {
            setPhoneNumberChanged(true);
        }
    };

    const validateCardNumber = (cardNumber) => {
        return /^\d{16}$/.test(cardNumber);
    };

    const validateCVV = (cvv) => {
        return /^\d{3,4}$/.test(cvv);
    };

    const validatePhoneNumber = (phoneNumber) => {
        return /^\d{10}$/.test(phoneNumber);
    };
    let UserID = localStorage.getItem('id')
    console.log(UserID);
        const handleSubmit = async () => {
            try {
                    const dataToAdd = {
                        UserID,
                        name: userData.name,
                        phoneNumber: userData.phoneNumber,
                        address: userData.address,
                        paymentMethod,
                        cardNumber: cardDetails.cardNumber,
                        cardHolderName: cardDetails.cardHolderName,
                        expirationDate: cardDetails.expirationDate,
                        cvv: cardDetails.cvv,

                    };
                    const response = await axios.post('http://localhost:3003/DineDetails', dataToAdd);
                    alert('Details submitted successfully!');
                    navigate('/');
                } catch (error) {
                    console.error('Error  Details Submition', error);
                }
            }; handleSubmit();

    return (
        <div className='DetailsBody'>
            <div className='Details'>
                <div className='title'>
                    <h4>User Details</h4>
                </div>
                <div className='Name'>
                    <label>Name:</label><br />
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter Your Name'
                        value={userData.name}
                        onChange={handleUserDataChange}
                    />
                </div>
                <br />
                <div className='PhoneNumber'>
                    <label>Phone Number:</label><br />
                    <input
                        type='text'
                        name='phoneNumber'
                        placeholder='Enter Your Phone Number'
                        value={userData.phoneNumber}
                        onChange={handleUserDataChange}
                    />                <br />
                    {phoneNumberChanged && !validatePhoneNumber(userData.phoneNumber) && (
                        <p style={{ color: 'red', marginLeft: '550px' }}>Please enter a valid 10-digit phone number.</p>
                    )}
                </div>
                <div className='Address'>
                    <label>Address:</label><br />
                    <textarea
                        rows='3'
                        cols='40'
                        name='address'
                        placeholder='Enter Your Address'
                        value={userData.address}
                        onChange={handleUserDataChange}
                    />
                </div>
                <br />
                <div className='PaymentDetails'>
                    <h4>Payment Details</h4>
                    <label>
                        <input
                            type='radio'
                            name='paymentMethod'
                            value='Cash on Delivery'
                            checked={paymentMethod === 'Cash on Delivery'}
                            onChange={handlePaymentMethodChange}
                        />Cash on Delivery
                    </label><br />
                    <label>
                        <input
                            type='radio'
                            name='paymentMethod'
                            value='Credit/Debit Cards'
                            checked={paymentMethod === 'Credit/Debit Cards'}
                            onChange={handlePaymentMethodChange}
                        />
                        Credit/Debit Cards
                    </label><br />

                    {paymentMethod === 'Credit/Debit Cards' && (
                        <div className='CardDetails'>
                            <div className='box1'>
                                <div className='b1'>
                                    <label>Card Number:</label><br />
                                    <input
                                        type='text'
                                        name='cardNumber'
                                        placeholder='Enter Card Number'
                                        value={cardDetails.cardNumber}
                                        onChange={handleCardDetailsChange}
                                    /><br />
                                    {cardNumberChanged && !validateCardNumber(cardDetails.cardNumber) && (
                                        <p style={{ color: 'red', marginLeft: '550px' }}>Please enter a valid 16-digit card number.</p>
                                    )}
                                </div>
                                <div className='b2'>
                                    <label>Cardholder Name:</label><br />
                                    <input
                                        type='text'
                                        name='cardHolderName'
                                        placeholder='Enter Cardholder Name'
                                        value={cardDetails.cardHolderName}
                                        onChange={handleCardDetailsChange}
                                    /><br />
                                </div>
                            </div>
                            <div className='box2'>
                                <div className='b3'>
                                    <label>Expiration Date:</label><br />
                                    <input
                                        type='text'
                                        name='expirationDate'
                                        placeholder='MM/YY'
                                        value={cardDetails.expirationDate}
                                        onChange={handleCardDetailsChange}
                                    />
                                </div>
                                <div className='b4'>
                                    <label>CVV:</label><br />
                                    <input
                                        type='text'
                                        name='cvv'
                                        placeholder='CVV'
                                        value={cardDetails.cvv}
                                        onChange={handleCardDetailsChange}
                                    /> {cvvChanged && !validateCVV(cardDetails.cvv) && (
                                        <p style={{ color: 'red', marginLeft: '550px' }}>Please enter a valid CVV (3 or 4 digits).</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <div>
                        <button id='submit' onClick={handleSubmit}>Submit</button></div>
                </div>
            </div>
        </div>
    );
}
