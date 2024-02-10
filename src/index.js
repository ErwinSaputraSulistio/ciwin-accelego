import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContextProvider } from 'store/GlobalContext'
import Router from 'router'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </GlobalContextProvider>
)
