import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [action,setaction] = useState("Login")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://java-project-dv6z.onrender.com/auth/signup" || "https://java-project-dv6z.onrender.com/user/signup", {
        name: name,email: email,password: password
      });

      if (res.data.id||res.data.success) {
        toast.success("User Registered Successfully");
        setaction('Login')
      } else {
        toast.error("Signup fail");
      }
    } catch (error) {
      toast.warning("Something went wrong");
      console.log(error);
    }
  };

  const userLogin = async()=>{
    try {
      const res = await axios.post("https://java-project-dv6z.onrender.com/auth/login",{
        email:email,password:password
      });
      if(res.data||res.data.success){
        toast.success("Login Successfully")
        navigate('/menu')
      }
      else{
        toast.error("Login fail");
      }
    } catch (error) {
      toast.warning("Something went wrong");
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{action}</h2>
        
        {action !== "Login" &&(
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"/>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"/>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"/>
        </div>

        {action==="Login"?
        <div className='flex gap-2 text-blue-500 mb-3'>
          Don't have an account?
          <span className='text-red-500 cursor-pointer' onClick={()=>setaction('Sign up')}>Sign Up</span>
        </div>:
        <div className='flex gap-2 text-blue-500 mb-3'>
          Already have account?
          <span className='text-red-500 cursor-pointer' onClick={()=>setaction('Login')}>Login</span>
        </div>
        }

        {action === "Login"?
          <button onClick={userLogin}
            className="w-full bg-indigo-600 text-white py-2 px-4 cursor-pointer rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>:
          <button onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-2 px-4 cursor-pointer rounded-lg hover:bg-indigo-700 transition">
            Sign Up
          </button>
        }

      </div>
    </div>
  );
};

export default Home;