import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor: "#fff"}}>
        <div className='navbar'>
            <ul>
              <li><NavLink to ="/">Home</NavLink></li>
              <li><NavLink to="/bollywood" >Bollywood</NavLink></li>
              <li><NavLink to="/technology">Technology</NavLink></li>
              <li><NavLink to="/hollywood">Hollywood</NavLink></li>
              <li><NavLink to="/fitness">Fitness</NavLink></li>
              <li><NavLink to="/food">Food</NavLink></li>
              <li><NavLink to="/travel">Travel</NavLink></li>
            </ul>
        </div>
        <hr />
    </div>
  )
}

export default Navbar