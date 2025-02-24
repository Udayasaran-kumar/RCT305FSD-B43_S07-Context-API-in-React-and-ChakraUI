import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContextprovider } from './Datacontext.jsx'

createRoot(document.getElementById('root')).render(
  <DataContextprovider>
    <App />
    </DataContextprovider>
)
