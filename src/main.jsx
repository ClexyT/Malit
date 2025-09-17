import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import CustomRoutes from './components/CustomRoutes'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CustomRoutes />
    </HashRouter>
  </React.StrictMode>
)