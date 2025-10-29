import React from 'react'
import Home from './Components/Home'
import { ToastContainer } from 'react-toastify';
import Menu from './Components/menu';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <ToastContainer autoClose={2000}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </div>
  )
}

export default App
