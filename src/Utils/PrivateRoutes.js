// import React, { useEffect, useState } from 'react'
// import { Outlet,Navigate } from 'react-router-dom'

// export default function PrivateRoutes() {
//     const [value,setValue]=useState(false)
//     let a = localStorage.getItem('authh')
//     let auth = {'token':value}
//     useEffect(()=>{
//       let a = localStorage.getItem('authh')
//       setValue(a)
//       console.log(value);
//     },[value])
//   return (
//     auth.token ? <Outlet/> :<Navigate to ='/login'/>
//   )
// }
// PrivateRoutes.js
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from './useAuth';

export default function PrivateRoutes() {
  const { authenticated } = useAuth();

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}
