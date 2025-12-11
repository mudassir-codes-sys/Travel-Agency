import { Profiler, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css"
import App from './App.jsx'
function onRender(id, phase, actualDuration, baseDuration) {
  console.log(id, phase, actualDuration, baseDuration);

}

createRoot(document.getElementById('root')).render(

  <Profiler onRender={onRender}>
    <App />
  </Profiler>


)
