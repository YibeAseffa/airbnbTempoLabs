How to test components:

Go to Main.jsx file,

1. To test standard search page components separatelty you cam unxomment each component at a time or
2. To test the whole standard search  page at once you can comment all components and uncomment only app component to render as shown below.

createRoot(document.getElementById('root')).render(

   <StrictMode>

    {/* <NavBarStandardSearch />

    <SearchListings/> */}

    <App/>

  </StrictMode>,
  
 
)
