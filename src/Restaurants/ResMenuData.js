import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../Styles/Menu.css';
import m1 from '../Images/menuimg.jpg';
import { useNavigate } from 'react-router-dom';

export default function ResMenuData({ id }) {
    const navigate = useNavigate();
    const location = useLocation();
    const parent = location.state?.data || {};
    const [menuData, setMenuData] = useState([]);
    const [restaurantData, setRestaurantData] = useState({});
    // const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get(`http://localhost:3003/ShowMenu/${parent.id}`);
                console.log(response.data);
                setMenuData(response.data);
                // const initialQuantities = response.data.reduce((acc, menu) => {
                //     acc[menu.id] = 0;
                //     return acc;
                // }, {});
                // setQuantities(initialQuantities);
            } catch (error) {
                console.error('Error Fetching Menu Data', error);
            }
        };

        const fetchResData = async () => {
            try {
                const response1 = await axios.get(`http://localhost:3003/ShowRes/${parent.id}`);
                console.log(response1.data);
                setRestaurantData(response1.data);
            } catch (error) {
                console.error('Error Fetching Restaurant Data', error);
            }
        };

        fetchMenuData();
        fetchResData();
    }, [parent.id]);
    let UserID = localStorage.getItem('id')
    const HandleCart = async (menuId, Name, Price,ItemImage) => {
        console.log('HandleCart');
        try {
            // const newQuantities = { ...quantities };
            // newQuantities[menuId] = quantity;
            // setQuantities(newQuantities);   quantity,

            await axios.post('http://localhost:3003/AddToCart', {
                UserID,
                menuId,
                Name,
                Price,
                // quantity,
                ItemImage
            });
            console.log('Added to cart:', Name);
            alert('Item Added To Cart');
        } catch (error) {
            console.error('Error adding to cart', error);
        }
    };

    return (
        <div className='MenuBody'>
            {(menuData.length === 0 || !restaurantData) ? (
                <p>Loading...</p>
            ) : (
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
                    <div className='menutable'>
                        <table className='table table-hover'>
                            <tbody>
                                {menuData.map((menu) => (
                                    <tr key={menu.id}>
                                        <td>{menu.Name}<br />
                                            Price: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                            </svg>{menu.Price}
                                        </td>
                                        <td><img src={menu.Image} style={{ height: '50px', width: '50px' }} alt='menuimg' /></td>
                                        <td>
                                            <button onClick={() =>  HandleCart(menu.id, menu.Name, menu.Price, menu.Image)}>
                                                Add to cart
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='cartpagebutton'>
                        <button onClick={() => { navigate('/CartPage') }}>My Cart</button>
                        <button onClick={() => { navigate('/Restaurants/telangana/hyderabad') }}>Go Back</button>
                    </div>
                </div>
            )}
        </div>
    );
}
