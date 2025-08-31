import React from 'react'
import Home from './Components/Home'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer autoClose={1000}/>
      <Home/>
    </div>
  )
}

export default App
