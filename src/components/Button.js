const Button = (props) => {
  return <button className="button">{props}</button>;
};

export default Button;

/* <div className="sort">
        <button
          className="button"
          onClick={() => {
            const filteredList = country.filter(
              (country) => country.name[0] == "Z"
            );
            setCountry(filteredList);
          }}
        >
          Filter
        </button>
      </div> */
