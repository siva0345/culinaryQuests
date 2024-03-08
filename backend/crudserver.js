var express = require('express');
var app = express();
const cors = require('cors')
app.use(cors())
var bodyparser = require('body-parser');
app.use(bodyparser.json());

//User Data & Crud Operations
app.use('/LoginUser',require('./Data/LoginUser'))
app.use('/PostUsersData',require('./Data/PostUsersData'))
app.use('/ShowUsersData',require('./Data/ShowUsersData'))
app.use('/UpdateUsersData',require('./Data/UpdataUsersData'))
app.use('/DeleteUsersData',require('./Data/DeleteUsersData'))

//Restaurant Data & Crud Operations
app.use('/DataRegister',require('./RestaurantData/RestuarantDataRegister'))
app.use('/ShowData',require('./RestaurantData/ShowRestaurantData'))

//Restaurant Menu & Crud Operations
app.use('/MenuRegister',require('./RestaurantMenu/RestaurantMenuRegister'))
app.use('/ShowMenu',require('./RestaurantMenu/ShowRestaurantMenu'))
// app.use('/ShowResData',require('./RestaurantData/SingleRestaurantData'))
app.use('/ShowRes',require('./RestaurantData/RESdata'))

//CART
app.use('/AddToCart',require('./Cart/AddCart'))
app.use('/UserCart',require('./Cart/UserCart'))
app.use('/ShowCart',require('./Cart/ShowCart'))
app.use('/DeleteCart',require('./Cart/DeleteCart'))
app.use('/UpdateCart',require('./Cart/UpdateCart'))

//Book
app.use('/BookDineIn',require('./Booking/BookDineIn'))

//DineInDetails
app.use('/  postOrders',require('./Orders/PostOrders'))
app.use('/ShowDines',require('./Booking/ShowDineIn'))

//FoodBooking
app.use('/BookOrders',require('./Food order/orderbook'))
app.use('/ShowOrders',require('./Food order/showorder'))

//DineBookingDetails
app.use('/DineDetails',require('./Booking/Details'))

app.listen(3003,()=>{
    console.log('Server started on port 3003');
    console.log('Connected');
})