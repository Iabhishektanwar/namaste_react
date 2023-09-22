import { useState, useEffect } from "react";
import VenueCard from "./VenueCard";
import Shimmar from "./Shimmar";
import { VENUE_DATA } from "../utils/constants";

const Body = () => {
  const [venue, setVenue] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(VENUE_DATA);
    const venueData = await data.json();
    const updatedVenues = venueData?.response?.venues;
    setVenue(updatedVenues);
  };

  if (venue.length === 0) {
    return (
      <div className="body">
        {Array.from({ length: 50 }, (_, i) => (
          <Shimmar key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="body">
      {venue.map((venuesData) => (
        <VenueCard key={venuesData.id} venuesData={venuesData} />
      ))}
    </div>
  );
};

export default Body;
