import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBarStandardSearch from './NavBarStandardSearch .jsx'
import SearchListings from './SearchListings .jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
    {/* <NavBarStandardSearch />
    <SearchListings/> */}
    <App/>
  </StrictMode>,
 
)
