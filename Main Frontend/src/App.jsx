// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import PageLoading from './Components/PageLoading'
import ProtectedRoute from './Components/ProtectedRoute'
import Categories from './Components/Categories'

function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path='/categories' element={<ProtectedRoute><Categories/></ProtectedRoute>} />

            <Route path='/' element={<LandingPage/>} />
            {/* <Route path='/categories' element={} /> */}
            <Route path='/page-loading' element={<PageLoading/>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
