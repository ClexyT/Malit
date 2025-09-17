
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SOON from '../SOON'
import App from '../App'

export default function CustomRoutes() {
  return (
    <BrowserRouter basename="/Malit">
      <Routes>
        <Route path="/" element={<SOON />} />
        <Route path="/experimental_features_malit" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}