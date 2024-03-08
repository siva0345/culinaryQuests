// import './App.css';
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Navbar from './MainPage/Navbar';
// import Home from './MainPage/Home';
// import PrivateRoutes from './Utils/PrivateRoutes';
// import FindRestaurants from './Restaurants/Restaurants';
// import DineIn from './DineIn/DineIn';
// import Login from './Credentials/Login';
// import SignIn from './Credentials/SignIn';
// import AboutUs from './MainPage/AboutUs';
// import ContactUs from './MainPage/ContactUs';
// // import Header from './Header';
// import FindRestaurantStates from './Restaurants/ResStates';
// import RestaurantData from './Restaurants/ResFindRes';
// import RestaurantMenu from './Restaurants/ResMenuData';
// import MyCart from './Cart/My Cart';
// import BookDineIn from './DineIn/DineInBook';

// function App() {
//   return (
//     <div className='Body'>
//        <Navbar/>
//        <BrowserRouter>
//             <Routes>
//               {/* <Route path='/*' Component={Navbar} /> */}
//               <Route path='/' Component={Home} />
//               <Route path='/Home' element={<Home/>} />
//               <Route element={<PrivateRoutes/>}>
//                 <Route element={<FindRestaurants/>} path='/FindRestaurants' exact/>
//                 <Route element={<DineIn/>} path='/DineIn' exact/>
//               </Route>
//               <Route path='/login' element={<Login/>} />
//               <Route path='/SignIn' element={<SignIn/>} />
//               <Route path='/About' element={<AboutUs/>} />
//               <Route path='/Contact' element={<ContactUs/>} />
//               {/* <Route path='/Header' element={<Header/>} /> */}
//               <Route path='/india' element={<FindRestaurantStates/>}/>
//               <Route path='/RestaurantMenu' element={<RestaurantMenu/>}/>
//               <Route path='/telangana/hyderabad' element={<RestaurantData/>}/>
//               <Route path='/CartPage' element={<MyCart/>} />
//               <Route path='/BookDineIn' element={<BookDineIn/>} />
//             </Routes>
//         </BrowserRouter>
//         {/* <BrowserRouter>
//             <Routes>
//               <Route path='/*' Component={Navbar} />
//               <Route path='/nav/*' Component={Navbar} />
//               <Route path='/Home' element={<Home/>} />
//               <Route element={<PrivateRoutes/>}>
//                 <Route element={<FindRestaurants/>} path='/FindRestaurants' exact/>
//                 <Route element={<DineIn/>} path='/DineIn' exact/>
//               </Route>
//               <Route path='/login' element={<Login/>} />
//               <Route path='/SignIn' element={<SignIn/>} />
//               <Route path='/About' element={<AboutUs/>} />
//             </Routes>
//         </BrowserRouter> */}
//     </div>
//   );
// }

// export default App;










import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAuth from './Utils/useAuth';
import Navbar from './MainPage/Navbar';
import Home from './MainPage/Home';
import SignIn from './Credentials/SignIn';
import AboutUs from './MainPage/AboutUs';
import ContactUs from './MainPage/ContactUs';
import Restaurants from './Restaurants/Restaurants';
import FindRestaurantStates from './Restaurants/ResStates';
import RestaurantData from './Restaurants/ResFindRes';
import RestaurantMenu from './Restaurants/ResMenuData';
import BookDineIn from './DineIn/DineInBook';
import DineIn from './DineIn/DineIn';
import DineInStates from './DineIn/DineInStates';
import DineInResData from './DineIn/DineInResData';
import MyCart from './Cart/My Cart';
import DineInDetails from './DineIn/DineInDetails';
import MyOrders from './MainPage/MyOrders';
import Details from './Restaurants/Details';
import MyBookings from './MainPage/MyBookings';
// import CalendarComponent from './DineIn/Demo';
function App() {
  const { authenticated } = useAuth();

  return (
    <div className='Body'>
      <Router>
        <Routes>
          <Route path='/*' element={<Navbar />} />
          <Route path='/Home/*' element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Contact' element={<ContactUs />} />
          <Route path='/Restaurants' element={<Restaurants />} />
          <Route path='/RestaurantStates' element={<FindRestaurantStates />} />
          <Route path='/RestaurantMenu' element={<RestaurantMenu />} />
          <Route path='/Restaurants/telangana/hyderabad' element={<RestaurantData />} />
          <Route path='/DineInCountries' element={<DineIn/>}/>
          <Route path='/DineInStates' element={<DineInStates/>}/>
          <Route path='/DineIn/telangana/hyderabad' element={<DineInResData/>}/>
          <Route path='/CartPage' element={<MyCart />} />
          <Route path='/BookDineIn' element={<BookDineIn />} />
          <Route path='/DineInDetails' element={<DineInDetails/>} />
          <Route path='/OrderDetails' element={<Details/>} />
        <Route path='/MyOrders' element={<MyOrders/>}/>
        <Route path='/MyBookings' element={<MyBookings/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

