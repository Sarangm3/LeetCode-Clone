import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <Link to='/'>CodeBase</Link>
        </div>
        <ul>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header