// import React, { useState } from 'react'
// import axios from 'axios'

// export default function Login() {

//   const[isLogin, setisLogin]=useState(false)

    // const [form, setForm] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    //   });
      
    //   const handleChange = (e) => {
    //     setForm({
    //       ...form,
    //       [e.target.name]: e.target.value,
    //     });
    //   };

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await fetch("http://localhost:3000/login", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(form)
    //       });
    //       const data = await response.text(); // Get response as text
    //       console.log(data); // Log the string response
    //     } catch (error) {
    //       console.error("Error:", error);
    //     }
    //   };
      
      
      

//   return (
//     <>  {isLogin?(
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//               required
//             //   value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//               required
//             //   value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//         </div>
//     ):(
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//               required
//               value={formData.username}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//               required
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     )}
        
//     </>
//   )
// }



// import React, { useState } from 'react';

// function App() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const handleChange2 = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit2 = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const [form, setForm] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
  
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(form)
//       });
//       const data = await response.text(); // Get response as text
//       console.log(data); // Log the string response
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
  

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
//         {isLogin ? (
//           <div id="loginForm">
//             <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="loginEmail" className="block text-gray-700" onChange={handleChange}>Email</label>
//                 <input type="email" id="loginEmail" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" required />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="loginPassword" className="block text-gray-700" onChange={handleChange}>Password</label>
//                 <input type="password" id="loginPassword" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" required />
//               </div>
//               <div className="mb-6">
//                 <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Login</button>
//               </div>
//             </form>
//             <p className="text-center">
//               Don't have an account? <button onClick={toggleForm} className="text-blue-500 hover:underline">Sign up</button>
//             </p>
//           </div>
//         ) : (
//           <div id="signupForm">
//             <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//             <form onSubmit={handleSubmit2}>
//               <div className="mb-4">
//                 <label htmlFor="signupEmail"   className="block text-gray-700" onChange={handleChange2} >Username</label>
//                 <input type="text" id="signupEmail" name="username" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" required />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="signupPassword"  className="block text-gray-700" onChange={handleChange2}>email</label>
//                 <input type="email" id="signupPassword"  name="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" required />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="confirmPassword"  className="block text-gray-700" onChange={handleChange2}> Password</label>
//                 <input type="password" id="confirmPassword" name="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" required />
//               </div>
//               <div className="mb-6">
//                 <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Sign Up</button>
//               </div>
//             </form>
//             <p className="text-center">
//               Already have an account? <button onClick={toggleForm} className="text-blue-500 hover:underline">Login</button>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if(data) {
        navigate('/Carditem');
      } else {
        alert('Login failed');
      }
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
        {isLogin ? (
          <div id="loginForm">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleLoginSubmit} target='http://localhost'>
              <div className="mb-4">
                <label htmlFor="loginEmail" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="loginPassword" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Login</button>
              </div>
            </form>
            <p to="/Carditem" className="text-center">
              Don't have an account? <button onClick={toggleForm} className="text-blue-500 hover:underline">Sign up</button>
            </p>
          </div>
        ) : (
          <div id="signupForm">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-4">
                <label htmlFor="signupUsername" className="block text-gray-700">Username</label>
                <input
                  type="text"
                  id="signupUsername"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupEmail" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupPassword" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Sign Up</button>
              </div>
            </form>
            <p className="text-center">
              Already have an account? <button onClick={toggleForm} className="text-blue-500 hover:underline">Login</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
