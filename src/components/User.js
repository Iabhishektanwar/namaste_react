import { useState } from "react";

function User(props) {
  const [ count, setCount ] = useState(7);
  const [ count1, setCount1 ] = useState(1);

  const { name, email } = props;
  return (
    <div className="user-tile">
      <div className="user-avatar" />
      <div className="user-name">{name}</div>
      <div className="user-email">{email}</div>
      <div className="user-email">{count + count1}</div>
    </div>
  );
}

export default User;
