import React from 'react'
import'./Styles/Navbar.css'
import image from './Culinary Quests.jpg'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import FindRestaurants from './FindRestaurants'
import DineIn from './DineIn'
import Login from './Login'

export default function Navbar() {
  return (
    <div className='NavbarContainer'>
        <nav class="Navbarhead">
        <img src={image} alt='logo'/>
        <div class="navbar">
            <div class="nav1">
                <ul class="nav1_elements">
                    <li id="element1"><a href="/">Home</a></li>
                    <li id="element2"><a href="/RestaurantsDetails">Restaurants Details</a></li>
                    <li id="element3"><a href="/DineInDetails">Dine-In Details</a></li>
                    <li id="element4"><a href="/Login">Logout</a></li>
                </ul>
            </div>
        </div>
        </nav>
        <Routes>
    <Route path='/' Component={Home} />
    <Route path='/FindRestaurants' Component={FindRestaurants} />
    <Route path='/DineIn' Component={DineIn} />
    <Route path='/Login' Component={Login} />

  </Routes>
        
    </div>
  )
}