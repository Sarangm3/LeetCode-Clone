import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import {toast} from 'react-toastify'
import { setType } from '../../features/auth/authSlice'
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData
    const { user, isLoading, isError, isSuccess, message } = useSelector((state)=>state.auth) 
    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) { //user because already log user try to take /login route
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])//this is a dependency array 
      //array value change then render this part other wise don't
    
      const onSubmit = (e) =>{
        e.preventDefault()//hold page
    
        const userData = {
          email,
          password,
        }
    
        dispatch(login(userData))
      }

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

    const handleclick = (type) => {
        dispatch(setType(type))
    }
    return (
        <form className='space-y-6 px-6 pb-4' onSubmit={onSubmit}>
            <h3 className='text-xl font-medium text-white'>Sign in to CodeBasic</h3>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
                Your Email
            </label>
            <input 
                onChange={onChange}
                type="email"
                name='email'
                id='email'
                className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder-gray-400 text-white' 
                placeholder='name@gmail.com'/>

            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>
                Your Password
            </label>
            <input 
                onChange={onChange}
                type="password"
                name='password'
                id='password'
                className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder-gray-400 text-white' 
                placeholder='*********'/>
            <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
                {isLoading ? 'Loading...' : 'Login'}
            </button>
            <button className='flex w-full justify-end' onClick={()=>handleclick("forgotPassword")}>
                <a href="#" className='text-sm block text-brand-orange hover:underline w-full text-right'>
                    Forgot Password? 
                </a>
            </button>
            <div className='text-sm font-medium text-gray-300'>
                Not Registered? {" "}
                <a href="#" className='text-blue-700 hover:underline' onClick={()=>handleclick("register")}>
                    Create account
                </a>
            </div>
        </form>
    )
}

export default Login