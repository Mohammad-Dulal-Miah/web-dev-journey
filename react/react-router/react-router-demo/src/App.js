import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import OrderSummary from './components/OrderSummary'
import NotFound from './components/NotFound'
import Featured from './components/Featured'
import New from './components/New'

const App = () => {
  const design = { textAlign: 'center' }

  const styleNav = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : '',
    }
  }

  return (
    <div style={design}>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <NavLink to="/home" style={styleNav}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" style={styleNav}>
          <li style={{ marginLeft: '50px' }}>About</li>
        </NavLink>

        <NavLink to="/order-summary" style={styleNav}>
          <li style={{ marginLeft: '50px' }}>Order summary</li>
        </NavLink>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />}>
          <Route index element={<Featured/>}/>
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
