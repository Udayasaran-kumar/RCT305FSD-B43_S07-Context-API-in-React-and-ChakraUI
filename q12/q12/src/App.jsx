import { useContext, useEffect } from 'react'
import './App.css'
import { DataContext } from './DataContextProvider'

function App() {
  const {isdark, setIsDark} = useContext(DataContext);
  useEffect(() => {
    document.body.className = isdark ? "dark-mode" : "light-mode";
  }, [isdark]);

  return (
    <div className={`app-container ${isdark ? "dark-mode" : "light-mode"}`}>
      <button onClick={()=>setIsDark(prev=>!prev)}>
        {isdark?"Light":"Dark"}
        </button>
    </div>
  )
}

export default App
