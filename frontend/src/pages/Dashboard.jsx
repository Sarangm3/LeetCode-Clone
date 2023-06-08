import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import GoalForm from '../components/GoalForm'
// import GoalItem from '../components/GoalItem'
// import Spinner from '../components/Spinner'
// import { getGoals, reset } from '../features/goals/goalSlice'
import React from 'react'

function Dashboard() {
  const navigate = useNavigate()
  
  return (
    <>
      <section className='heading'>
        {/* <h1>Welcome {user && user.name}</h1> */}
        <p>code Basic</p>
      </section>
    </>
  )
}

export default Dashboard
