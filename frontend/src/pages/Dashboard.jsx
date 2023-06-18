import { useNavigate } from 'react-router-dom'
import Header from '../components/navbar/Header'
import React from 'react'

function Dashboard() {
  const navigate = useNavigate()
  
  return (
    <>
      <Header />
      <section className='heading'>
        <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">hello world</div>
      </section>
    </>
  )
}

export default Dashboard
