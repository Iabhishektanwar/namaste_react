import { Fragment } from "react";

const VenueCard = (props) => {
  const { venuesData } = props;
  const { name, contact, location } = venuesData;
  const { formattedPhone } = contact;
  const { address, crossStreet, postalCode, city, state, country } = location;

  return (
    <div className="card">
      <div className="user-info">
        <div className="label">Name:</div>
        {name}
      </div>
      <div className="user-info">
        <div className="label">Address:</div>
        {address},
        <br />
        {crossStreet}, {city}, {state}
        <br />
        {country} {postalCode}
      </div>
      <div className="user-info">
        <div className="label">Contact:</div>
        {formattedPhone}
      </div>
    </div>
  );
};



export const enhansedVenueCard = (VenueCard) => {
  return (props) => {
    return (
      <Fragment>
        <label>Has Perk</label>
        <VenueCard {...props} />
      </Fragment>
    );
  };
};

export default VenueCard;
