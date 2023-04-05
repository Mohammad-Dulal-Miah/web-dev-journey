import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Order summary</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>

      <div>
        <div>
          <Link to='featured' style={{marginRight:'50px'}}>Featured </Link>
          <Link to='new'>New Product</Link>
        </div>
        <Outlet/>
      </div>
    </div>
  )
}

export default OrderSummary
