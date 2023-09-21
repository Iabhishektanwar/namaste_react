const CountryCard = (props) => {
  const { name, flagImgUrl } = props.countryData;
  return (
    <div>
      <h1>{name}</h1>
      <img scr={flagImgUrl} />
    </div>
  );
};

export default CountryCard;
