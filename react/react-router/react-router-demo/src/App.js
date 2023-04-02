import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  const design = { textAlign: 'center' }

  return (
    <div style={design}>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <Link to="/home">
          <li style={{ marginLeft: '50px' }}>Home</li>
        </Link>
        <Link to="/about">
          <li style={{ marginLeft: '50px' }}>About</li>
        </Link>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
