import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import SOON from '../SOON'
import App from '../App'

export default function CustomRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SOON />} />
        <Route path="/experimental_features_malit" element={<App />} />
      </Routes>
    </HashRouter>
  )
}