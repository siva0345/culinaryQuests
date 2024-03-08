import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import image from '../Images/Culinary Quests.jpg';
import DineIn from '../DineIn/DineIn';
import useAuth from '../Utils/useAuth';
import Login from '../Credentials/Login';
import Home from './Home';
import '../Styles/Navbar.css';
import Restaurants from '../Restaurants/Restaurants';

export default function Navbar() {
  const location = useLocation();
  const { authenticated, logout } = useAuth();

  return (
    <div className='NavbarContainer'>
      <nav className="Navbarhead">
        <img src={image} alt='logo' />
        <div className="navbar">
          <div className="nav1">
            <ul className="nav1_elements">
              <li id="element1"><a href="/">Home</a></li>
              <li id="element2"><a href="/Restaurants">Find Restaurants</a></li>
              <li id="element3"><a href="/DineInCountries">Dine-In</a></li>
              <li id="element3"><a href="/MyOrders">My Orders</a></li>
              <li id="element3"><a href="/MyBookings">My Bookings</a></li>
              <li id="element4">
                {authenticated ? (
                  <a href="/" onClick={() => logout()}>Logout</a>
                ) : (
                  <a href="/login">Login</a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={!authenticated ? <Login /> : <Home />} />
        <Route
          path='/Restaurants'
          element={!authenticated ? <Login /> : <Restaurants />}
        />
        <Route path='/DineInCountries' element={!authenticated ? <Login /> : <DineIn />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}


































// import React, { useEffect, useState } from 'react'
// import'../Styles/Navbar.css'
// import image from '../Images/Culinary Quests.jpg'
// import { Route ,Routes} from 'react-router-dom'
// import ResFindRes from '../Restaurants/ResFindRes'
// import DineIn from '../DineIn/DineIn'
// import PrivateRoutes from '../Utils/PrivateRoutes'
// import Login from '../Credentials/Login'
// import Home from './Home'
// import { useLocation } from 'react-router-dom'

// // import { Routes,Route } from 'react-router-dom'
// // import Home from './Home'
// // import FindRestaurants from './FindRestaurants'
// // import DineIn from './DineIn'
// // import Login from './Login'
// // import AboutUs from './AboutUs'
// import useAuth from '../Utils/useAuth'
// export default function Navbar(props) {
//   const location = useLocation();
//   const receivedData = location.state ? location.state : null;

//   // let[value,setValue]=useState(false)
//   const { authenticated } = useAuth();
//   // let a = authenticated
//   useEffect(()=>{
//     console.log(location);
//     //  a = authenticated;
//     console.log(authenticated);
//   },[])
//   return (
//     <div className='NavbarContainer'>
//         <nav class="Navbarhead">
//         <img src={image} alt='logo'/>
//         <div class="navbar">
//             <div class="nav1">
//                 <ul class="nav1_elements">
//                     <li id="element1"><a href="/">Home</a></li>
//                     <li id="element2"><a href="/FindRestaurants">Find Restaurants</a></li>
//                     <li id="element3"><a href="/DineIn">Dine-In</a></li>
//                     <li id="element4"><a href="/login">Login</a></li>
//                 </ul>
//             </div>
//         </div>
//         </nav>
      
//            <Routes>
//         <Route path='/' element={!authenticated ? <Login /> : <Home />} />
//         <Route
//           path='/FindRestaurants'
//           element={authenticated ? <Login /> : <ResFindRes />}
//         />
//         <Route path='/DineIn' element={authenticated ? <DineIn /> : <Login />} />
//         <Route path='/login' Component={Login} />
//       </Routes>  
       
//     </div>
//   )

 
// }