import React from 'react'
import { createRoot } from 'react-dom/client'
import CustomRoutes from './components/CustomRoutes'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomRoutes />
  </React.StrictMode>
)