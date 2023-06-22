import React ,{useState,useEffect}from 'react'
import AuthNavbar from '../../components/navbar/AuthNavbar';
import AuthModel from '../../components/models/AuthModel';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const navigate = useNavigate();
  const [pageLoading,setPageLoading] = useState(true);
  const {isOpen,isLoading,user} = useSelector(state => state.auth);
  useEffect(()=>{
    if(user){
      navigate('/');
    }
    if(!isLoading && !user) setPageLoading(false);
  },[user,navigate,isLoading])

  if(pageLoading) return null;//remove little response from auth route

  return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <div className='max-w-5fxl mx-auto'>
            <AuthNavbar/>
            <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-event-none select-none">
              <img src="/hero.png" alt="hero img" />
            </div>
            {isOpen && <AuthModel />}
        </div>
    </div>
  )
}

export default AuthPage