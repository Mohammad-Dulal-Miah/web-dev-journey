import { useMemo, useState } from 'react'

const App = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  function incrementOne() {
    setCountOne((prev) => countOne + 1)
  }

  function incrementTwo() {
    setCountTwo((prev) => countTwo + 1)
  }

  const isEven = useMemo(()=>{
    let i = 0;
    while (i < 200000000) i++
    return countOne % 2 === 0 ? 'even' : 'odd';
  },[countOne]);

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={incrementOne}>
        Increment {countOne}----{isEven}
      </button>
      <br/>
      <button onClick={incrementTwo}>
        Increment {countTwo}
        </button>
    </div>
  )
}

export default App
