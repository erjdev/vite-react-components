import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {helloAnything("erik")}
    </>
  )
}

export default App
