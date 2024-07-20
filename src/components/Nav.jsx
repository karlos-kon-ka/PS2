import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes, Router } from 'react-router-dom'

export default function Nav() {
  return (
    <header>
        <nav>
        <ul>
          <li><Link to="/">Principio</Link></li>
          <li><Link to="/mas">Más</Link></li> 
        </ul>
      </nav>
      
    </header>
  )
}


