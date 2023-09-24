import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <>
      <div className="flex justify-center bg-blue-100 shadow-md mb-2">
        <ul className="flex p-4">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-4">{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
