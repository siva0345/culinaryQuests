import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Login.css';
import useAuth from '../Utils/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [EmailId, setEmailId] = useState('');
  const [Password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/LoginUser/${EmailId}/${Password}`);
      console.log(response.data);
      if (!response.data) {
        alert('Invalid Credentials');
        setEmailId('');
        setPassword('');
      } else {
        alert('Login Success');
        login();
        localStorage.setItem("id", response.data.ID);
        navigate('/');
        setEmailId('');
        setPassword('');
      }
    } catch (error) {
      alert('Error Login Failed', error.message);
    }
  }

  return (
    <div className='Loginbody'>
      <div className='LoginContainer'>
        <div className='LoginBox'>
          <div className='LoginBody-1'>
            <div className='LoginBody-Field1'>
              <label>Email id:</label>
              <input type='text' placeholder='Enter your Email id' onChange={(e) => { setEmailId(e.target.value) }} value={EmailId} />
            </div>
            <div className='LoginBody-Field1'>
              <label>Password:</label>
              <input type='password' placeholder='Enter your Password' onChange={(e) => { setPassword(e.target.value) }} value={Password} />
            </div>
            <div className='LoginBody-button1'>
              <button onClick={handleLogin}>Login</button>
            </div>
            <div className='LoginBody-text'>
              <p>Don't Have an Account? <a href='/SignIn'>Sign In Here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




















// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import '../Styles/Login.css';
// import PrivateRoutes from '../Utils/PrivateRoutes';
// import useAuth from '../Utils/useAuth';

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const[value,setValue]=useState(false);
//   const[EmailId,setEmailId]=useState('')
//   const[Password,setPassword]=useState('')

//   const Handlelogin = async() =>{
//     let data1 = true;
//       try{
//           const response = await axios.get(`http://localhost:3003/LoginUser/${EmailId}/${Password}`)
//           console.log(response.data);
//           if(!response.data){
//             alert('Invalid Credentials')
//             setEmailId('')
//             setPassword('')
//           }else{
             

//               alert('Login Sucesss')
//               //  localStorage.setItem("authh" , "true")
//               login()
//               localStorage.setItem("id",response.data.ID)
//               let a = localStorage.getItem("id")
//               console.log(a);
//                 navigate('/' , {state:{data1}})
//                 setEmailId('')
//                 setPassword('')
//           }
//       }catch(error){
//           alert('Error Login Failed',error.message)
//       }
//   }
//   return(
//     <div className='Loginbody'>
//       <div className='LoginContainer'>
//         <div className='LoginBox'>
//           <div className='LoginBody-1'>
//             <div className='LoginBody-Field1'>
//               <label>Email id:</label>
//               <input type='text' placeholder='Enter your Email id' onChange={(e)=>{setEmailId(e.target.value)}} value={EmailId}/>
//             </div>
//             <div className='LoginBody-Field1'>
//               <label>Password:</label>
//               <input type='text' placeholder='Enter your Password' onChange={(e)=>{setPassword(e.target.value)}} value={Password}/>
//             </div>
//             <div className='LoginBody-button1'>
//               <button onClick={Handlelogin} >Login</button>
//             </div>  
//             <div className='LoginBody-text'>
//               <p>Don't Have an Account? <a href='/SignIn'>Sign In Here</a></p>
//             </div>
            
//         </div>
//         </div>
//       </div> 
//     </div>
//   )
// }

