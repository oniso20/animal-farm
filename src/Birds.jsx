import React, { Component } from "react";
import "./App.css";
import "./card.css";
import "./search.css";
import "./main.css";
import Card from "./Card";
import { birds } from "./data";
import { emoji } from "./emoji";
import Nav from "./Nav";

class Birds extends Component {
  state = {
    birds: birds,
    search: "",
    span: "",
  };

  likeHandler = (name) => {};

  addHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        if (bird.name === name) {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return bird;
        }
      });
      return {
        birds: updatedArray,
      };
    });
  };
  dislikeHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        if (bird.name === name) {
          return { ...bird, likes: bird.likes - 1 };
        } else {
          return bird;
        }
      });
      return {
        birds: updatedArray,
      };
    });
  };

  removeHandler = (name) => {
    const updatedArray = this.state.birds.filter((bird) => bird.name !== name);
    this.setState({ birds: updatedArray });
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const birdFilter = this.state.birds.filter((bird) => {
      return bird.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    const birdsList = birdFilter.map((bird) => {
      return (
        <Card
          key={bird.name}
          name={bird.name}
          likes={bird.likes}
          like={emoji.like}
          dislikes={bird.dislikes}
          removeCard={() => this.removeHandler(bird.name)}
          addDislikes={() => this.dislikeHandler(bird.name)}
          addLikes={() => this.addHandler(bird.name)}
        />
      );
    });

    return (
      <div className="outer-container">
        <Nav />
        <div className="search">
          <h2>
            Browse through our catalogue of{" "}
            <span>{this.state.birds.length}</span> birds and show some{" "}
            <span>&#10084;</span> to your favorites.
          </h2>
          <input
            onChange={this.searchHandler}
            type="text"
            placeholder="Search"
          />
        </div>
        <main className="container">{birdsList}</main>
      </div>
    );
  }
}

export default Birds;
