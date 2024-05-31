import { useState } from 'react'
import { useRoutes, HashRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function AppRoutes(){
  const routes = useRoutes([
    {path: "/", element: <Home />}
  ])

  return routes
}

function App() {

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App
