import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
// import ParallaxComponent from './utils/Parallax.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ParallaxComponent> */}
      <App />
    {/* </ParallaxComponent> */}
  </React.StrictMode>,
)
