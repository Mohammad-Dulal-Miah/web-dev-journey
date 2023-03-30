import './App.css'
import { useState } from 'react'

function App() {
  const [information, setInformation] = useState([])

  const userDetails = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const text = e.target.text.value

    const data = { email, text }

    setInformation([...information, data])
  }

  return (
    <div className="App">
      <h2>Enter your Information</h2>
      <form onSubmit={userDetails}>
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <input type="text" name="text" placeholder="Enter your hobby" />
        <br />
        <input type="submit" name="submit" value="submit" />
      </form>

      {information.map((data) => (
        <div>
          <h2>user email: {data.email}</h2>
          <p>{data.text}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default App
