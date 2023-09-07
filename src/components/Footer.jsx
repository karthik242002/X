import React from 'react'
import { useNavigate } from 'react-router'

export default function Footer() {
  const navigate = useNavigate()
  
  return (
    <div className='footer'>
      <p>@JAYA ENGINEERING COLLEGE</p>
      <p onClick={()=>navigate("/")}>Home</p>
      <p onClick={()=>navigate("/student")}>Contact</p>
    </div>
  )
}
