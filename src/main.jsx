import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import AirbnbSearch from './AirbnbSearch.jsx'
import Inspirations from './Inspirations.jsx'
import AirbnbFooter from './AirbnbFooter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar /> */}
    {/* <AirbnbSearch /> */}
    {/* <Inspirations/> */}
    {/* <AirbnbFooter/> */}
    
    <App/>
  </StrictMode>,
)
