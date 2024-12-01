How to test components:

Go to Main.jsx file,

1. To test homepage components separatelty you cam unxomment each component at a time or
2. To test the whole homepage at once you can comment all components and uncomment only app component to render as shown below.

reateRoot(document.getElementById('root')).render(
<StrictMode>
{/\* <div className="flex flex-col gap-8 p-10 bg-white">

      <AirbnbListingNavBar />

      <ListingContents />
      <ListingExploreFooter/>
      <ListingReviews />
      <ListingExploreFooter/>
      <AirbnbFooter/>

    </div>
     */}
    <App />

</StrictMode>,
)
