import React from "react";
import axios from "axios";
import Followers from "./components/Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }
  componentDidMount() {
    axios.get("https://api.github.com/users/DanialHadavi").then((response) => {
      this.setState({
        cards: response.data,
      });
      console.log(response.data);
    });
  }

  render() {
    return (
      <div className="card">
        <img
          className="my-img"
          width="200"
          src={this.state.cards.avatar_url}
          key={this.state.cards.id}
          alt={"test"}
        />
        <span>
          My Github:{" "}
          <a href={this.state.cards.html_url}>{this.state.cards.login}</a>
        </span>
        <span>Name: {this.state.cards.name}</span>
        <span>Location: {this.state.cards.location}</span>
        <span>Bio: {this.state.cards.bio}</span>
        <h2> {this.state.cards.followers} Followers</h2>
        <Followers />
      </div>
    );
  }
}

export default App;
