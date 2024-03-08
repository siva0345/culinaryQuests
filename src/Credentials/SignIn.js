import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/SignIn.css'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: '',
    EmailId: '',
    Password: '',
  });
  const [errors, setErrors] = useState({
    Name: '',
    EmailId: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let fieldErrors = '';

    switch (name) {
      case 'Name':
        // Validate 'Name' if needed
        break;
      case 'EmailId':
        const emailPattern = /\S+@\S+\.\S+/;
        if (!value.match(emailPattern)) {
          fieldErrors = 'Invalid email address';
        }
        break;
        case 'Password':
          const passwordPattern1 = /^(?=.*[A-Z])/;
          const passwordPattern3 = /^(?=.*\d)/;
          const passwordPattern4 = /^(?=.*[!@#$%^&*])/;
  
          fieldErrors = '';
  
          if (value.length < 8) {
            fieldErrors = 'Password must be at least 8 characters long.';
          } else if (!value.match(passwordPattern1)) {
            fieldErrors = 'Password should contain a capital letter.';
          } else if (!value.match(passwordPattern3)) {
            fieldErrors = 'Password should contain one number.';
          } else if (!value.match(passwordPattern4)) {
            fieldErrors = 'Password should contain a special character.';
          }
  
          break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: fieldErrors,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).every((error) => error === '')) {
      try {
        const response = await axios.post(
          'http://localhost:3003/PostUsersData',
          formData
        );
        if (response && response.data) {
          alert('Registration successful');
          navigate('/')
          setFormData({
            Name: '',
            EmailId: '',
            Password: '',
          });
        }else {
          if (!response) {
            alert('No response received from the server.');
          } else {
            alert('Response received but with no data.');
          }
        }
      } catch (error) {
        console.error('Error during registration:', error.response.data);
        alert('Registration failed', error.message);
      }
    } else {
      alert('Form has errors. Please fix them before submitting.');
    }
  };
  return (
    <div className='SignInbody'>
      <div className='SignInMainContainer'>
        <div className='SignInBody-1'>
          <div className='SignInBody-Field1'>
            <label htmlFor="Name">Name:</label>
            <input type='text' name="Name" placeholder='Enter your Name' value={formData.Name} onChange={handleChange} required/>
          </div>
          <div className='SignInBody-Field1'>
            <label htmlFor="EmailId">Email id:</label>
            <input type='text' placeholder='Enter your Email id' id="EmailId" name="EmailId" value={formData.EmailId} onChange={handleChange} required/>
            <div className="error" style={{ color: 'red' }}>{errors.EmailId}</div>
          </div>
          <div className='SignInBody-Field1'>
            <label htmlFor="Password">Password:</label>
            <input type='password' placeholder='Enter your Password' id="Password" name="Password" value={formData.Password} onChange={handleChange} required/>
            <div className="error" style={{ color: 'red' }}>{errors.Password}</div>
          </div>
          <div className='SignInBody-button1'>
            <button onClick={handleSubmit} >Register</button>
          </div>
          <div className='SignInBody-text'>
            <p>Already have an Account? <a href='/Login'>Login Here</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
// import React, { useState } from 'react';
// import axios from 'axios';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     Name: '',
//     Email: '',
//     Password: '',
//   });
//   const [errors, setErrors] = useState({
//     Name: '',
//     Email: '',
//     Password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     validateField(name, value);
//   };

//   const validateField = (name, value) => {
//     let fieldErrors = '';

//     switch (name) {
//       case 'Name':
//         // Validate 'Name' if needed
//         break;
//       case 'Email':
//         const emailPattern = /\S+@\S+\.\S+/;
//         if (!value.match(emailPattern)) {
//             fieldErrors = 'Invalid email address';
//           }
//           break;
//         case 'Password':
//         const passwordPattern1 = /^(?=.*[A-Z])/;
//         const passwordPattern3 = /^(?=.*\d)/;
//         const passwordPattern4 = /^(?=.*[!@#$%^&*])/;

       

//         if (formData.Password.length < 8) {
//           fieldErrors += 'Password must be at least 8 characters long.';
//         }
//         if (!formData.Password.match(passwordPattern1)) {
//           fieldErrors += 'Password should contain a capital letter.';
//         }

//         if (!formData.Password.match(passwordPattern3)) {
//           fieldErrors += 'Password should contain one number.';
//         }

//         if (!formData.Password.match(passwordPattern4)) {
//           fieldErrors += 'Password should contain a special character.';
//         }

//         if (value === '' || formData.Password === '') {
//           fieldErrors += 'All fields are mandatory.';
//         }
//         break;
//       default:
//         break;
//     }

//     setErrors({
//       ...errors,
//       [name]: fieldErrors,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (Object.values(errors).every((error) => error === '')) {
//       try {
//         const response = await axios.post(
//           'http://localhost:3003/PostUsersData',
//           formData
//         );
//         if (response.data) {
//           alert('Registration successful');
//         }
//       } catch (error) {
//         console.error('Error during registration:', error.response.data);
//         alert('Registration failed', error.message);
//       }
//     } else {
//       alert('Form has errors. Please fix them before submitting.');
//     }
//   };
//   return (
//     <div className="form">
//       <div className="form-body">
//         <div className="name">
//           <label className="form__label" htmlFor="Name">
//             Name
//           </label>
//           <input
//             className="form__input"
//             type="text"
//             name="Name"
//             value={formData.Name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="email">
//           <label className="form__label" htmlFor="Email">
//             Email
//           </label>
//           <input
//             type="Email"
//             id="Email"
//             className="form__input"
//             name="Email"
//             value={formData.Email}
//             onChange={handleChange}
//           />
//           <div className="error">{errors.Email}</div>
//         </div>

//         <div className="password">
//           <label className="form__label" htmlFor="Password">
//             Password
//           </label>
//           <input
//             className="form__input"
//             type="password"
//             id="Password"
//             name="Password"
//             value={formData.Password}
//             onChange={handleChange}
//           />
//           <div className="error">{errors.Password}</div>
//           {formData.Password &&
//             !formData.Password[0].match(/[A-Z]/) && (
//               <div className="capital-message">
//                 Password should start with a capital letter
//                 </div>
//             )}
//         </div>

//         {/* Add ConfirmPassword input and error display here */}
//       </div>
//       <div className="footer">
//         <button onClick={handleSubmit} type="submit" className="btn">
//           Sign Up
//         </button>
//       </div>
//       <div className="footer">
//         <button onClick={() => console.log('Navigate to login')} type="button" className="btn">
//           Have an account? Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default RegistrationForm

