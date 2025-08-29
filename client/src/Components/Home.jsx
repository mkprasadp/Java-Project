import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/signup", {
        name: name,
        email: email,
        password: password
      });

      if (res.data) {
        toast.success("User Registered Successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.warning("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"/>
        </div>

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

        <button onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-2 px-4 cursor-pointer rounded-lg hover:bg-indigo-700 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
