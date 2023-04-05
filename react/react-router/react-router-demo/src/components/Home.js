import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h4 style={{ color: 'green' }}>Welcome to You Home</h4>
      <p style={{ color: 'red' }}>You can crack this problem</p>
      <button onClick={() => navigate('/order-summary')}>Order place</button>
    </div>
  )
}

export default Home
