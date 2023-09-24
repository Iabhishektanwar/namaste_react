import { useEffect, useState } from "react";
import { VENUE_DATA } from "./constants";

const useVenues = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetchVenueData();
  }, []);

  const fetchVenueData = async () => {
    const data = await fetch(VENUE_DATA);
    const json = await data.json();
    const venues = json?.response?.venues;
    
    setVenues(venues);
  };

  return venues;
};

export default useVenues;
