import { useEffect, useRef } from 'react'

const App = () => {
  const inputRef = useRef(null);
 
  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Log In</h2>
      <input type="email" name="email" ref={inputRef} value="" />
      <button>Submit</button>
    </div>
  )
}

export default App
