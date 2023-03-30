import { useEffect, useRef, useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    setRenderCount((prev) => prev + 1)
    inputRef.current = renderCount;
  }, [number]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Welcome to useRef hook</h3>
      <p>Your number is: {number}</p>
      <input
        type="number"
        name="number"
        ref={inputRef}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h4>Total render : {renderCount}</h4>
    </div>
  )
}

export default App
