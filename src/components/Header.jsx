import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
    const navigate = useNavigate()
    
  return (
    <div className='header'>
        <div className="logo">
        </div>
    <div className="section1">
        <ul className="home-section">
        <li  onClick={()=>navigate('/')}>Home</li>
        <li onClick={()=>navigate("/student")}>Studentdetails</li>
        <li>Contact</li>
        <li>Login</li>
        </ul>
        </div>
    </div>
  )
}
