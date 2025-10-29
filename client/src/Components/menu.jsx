import axios from 'axios';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../assets/react.svg'

const menu = () => {
  const navigate = useNavigate();

  const logout = async()=>{
    try {
      const res = await axios.post("http://localhost:8080/auth/logout")
      if(res.data){
        toast.success("Logout Successfully");
        navigate('/')
      }
    } catch (error) {
      toast.warning("Something went error");
    }
  }
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">

      <NavLink to='/menu' className='flex items-center gap-2'>
        <img src={logo} alt="" className="w-10 h-10 rounded"/>
        <h2 className="text-xl font-bold text-red-600">Logo</h2>
      </NavLink>

      <div className="flex items-center gap-4">
        <button onClick={logout} className='bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bd-red-700 transition'>
          Logout
        </button>
      </div>

    </div>
  )
}

export default menu
