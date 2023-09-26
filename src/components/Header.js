import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <>
      <header>
        <nav>
          <ul className="unorderedList">
            <li className="listItem">
              <Link to="/">Home</Link>
            </li>
            <li className="listItem">
              <Link to="/about">About</Link>
            </li>
            <li className="listItem">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="listItem">{onlineStatus ? "🟢" : "🔴"}</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
