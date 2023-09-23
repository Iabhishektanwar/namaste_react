import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>Header</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">ContactUs</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
