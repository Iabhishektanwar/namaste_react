import React from "react";
import USER_DATA from "../utils/constants"

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name: "dummyName",
                location : "default"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Iabhishektanwar");
        const json = await data.json();

        console.log(json);
        this.setState({
            userInfo : json
        });
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        
    }

    render () {
        const {userInfo} = this.state;
        return (
            <div className="user-tile">
              <img className="user-avatar" src={userInfo.avatar_url} />
              <div className="user-name">{userInfo.name}</div>
              <div className="user-email">{userInfo.location}</div>
            </div>
          );
    }
}

export default UserClass;