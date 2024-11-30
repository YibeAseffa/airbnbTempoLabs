import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AirbnbFooter from './AirbnbFooter.jsx'
import ListingContents from './ListingContents.jsx'
import ListingReviews from './ListingReviews .jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <div className="flex flex-col gap-8 p-10 bg-white">
      
       <ListingContents/>
      <ListingReviews/>
    </div> */}
    
    <App />
    
  </StrictMode>,
)
