How to test components:

Go to Main.jsx file, 

1. To test homepage components separatelty you cam unxomment each component at a time or 
2. To test the whole homepage at once you can comment all components and uncomment only app component to render as shown below. 

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
