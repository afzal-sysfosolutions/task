import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormContainer from './FormContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormContainer/>
    </>
  )
}

export default App
