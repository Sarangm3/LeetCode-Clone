import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { logout, reset ,setOpen} from '../../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  const headleClick = () => {
    dispatch(setOpen(true))
  }
  return (
    <header className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
      <Link to='/' className='flex items-center justify-center gap-2 h-20 text-white'>
        <img src="/coding.svg" alt="codeBasic" className='h-1/4'/>
        GoalSetter
      </Link>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <div className="flex items-center">
            <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
            hover:text-brand-orange hover:bg-white  hover:border-brand-orange hover:border-2 border-2 border-transparent outline-none
            transition duration-300 ease-in-out'
            onClick={headleClick}
            >
              Sign In
            </button>
          </div>
        )}
      </ul>
    </header>
  )
}

export default Header