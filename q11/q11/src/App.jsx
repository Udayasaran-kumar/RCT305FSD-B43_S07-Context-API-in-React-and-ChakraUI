import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomMainRight from './components/BottomMainRight'
import Bottom from './components/Bottom'

function App() {
  const [username, setUsername] = useState("saran")

  return (
    <>
    <Bottom username={username}/>
      
    </>
  )
}

export default App
