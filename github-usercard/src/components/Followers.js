import React from "react";
import axios from "axios";

class Followers extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/DanialHadavi/followers")
      .then((response) => {
        this.setState({
          followers: response.data,
        });
        console.log(response.data);
      });
  }

  render() {
    return (
      <div className="followers">
        {this.state.followers.map((ff, ids) => (
          <div className="ff">
            <img width="150" src={ff.avatar_url} key={ids.id} alt={"hello"} />
            <a href={ff.html_url}> {ff.login} </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Followers;
