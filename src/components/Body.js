import CountryCard from "./CountryCard";
import allCountryCode  from "./allCountryCode";

const Body = () => {
  return (
    <div className="body">
      <div className="country-card">
        {allCountryCode.map((countryData) => (
          <CountryCard key={countryData.countryId} countryData={countryData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
