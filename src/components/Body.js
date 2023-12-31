import { useState, useEffect } from "react";
import VenueCard, { enhansedVenueCard } from "./VenueCard";
import Shimmar from "./Shimmar";
import { VENUE_DATA } from "../utils/constants";
import useVenues from "../utils/useVenues";

const Body = () => {
  const [venue, setVenue] = useState([]);
  const [filteredVenue, setFilteredVenue] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   const venueData = useVenues();
  //   setVenue(venueData);
  //   setFilteredVenue(venueData);
  // }, []);

  const venueData = useVenues();
  console.log(venueData);
  useEffect(() => {
    setVenue(venueData);
    setFilteredVenue(venueData);
    console.log(venueData);
  }, [venueData]);

  // setVenue(venueData);
  // setFilteredVenue(venueData);

  // const fetchData = async () => {
  //   const data = await fetch(VENUE_DATA);
  //   const venueData = await data.json();
  //   const updatedVenues = venueData?.response?.venues;
  //   setVenue(updatedVenues);
  //   setFilteredVenue(updatedVenues);
  // };

  //Conditional rendering

  const EnhansedVenueCard = enhansedVenueCard(VenueCard);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const filteredVenue = venue.filter((v) =>
              v.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredVenue(filteredVenue);
          }}
        >
          Search
        </button>
      </div>

      {/* <div className="sort">
        <button
          className="button"
          onClick={() => {
            buttonText === "Login"
              ? setButtonText("Logout")
              : setButtonText("Login");
          }}
        >
          {buttonText}
        </button>
      </div> */}
      <div className="body">
        {filteredVenue.length === 0
          ? Array.from({ length: 50 }, (_, i) => <Shimmar key={i} />)
          : filteredVenue.map((venuesData) =>
              venueData.verified ? (
                <EnhansedVenueCard
                  key={venuesData.id}
                  venuesData={venuesData}
                />
              ) : (
                <VenueCard key={venuesData.id} venuesData={venuesData} />
              )
            )}
      </div>
    </>
  );
};

export default Body;
