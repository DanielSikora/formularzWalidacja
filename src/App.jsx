import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterForm from './components/RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Formularz Rejestracyjny</h1>
      <RegisterForm />
    </>
  )
}

export default App
