import React, { Component } from "react";
import "./App.css";
import "./card.css";
import "./search.css";
import "./main.css";
import Card from "./Card";
import { animals } from "./data";
import { emoji } from "./emoji";
import Nav from "./Nav";

class Animals extends Component {
  state = {
    animals: animals,
    search: "",
    span: "",
  };

  likeHandler = (name) => {};

  addHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };
  dislikeHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes - 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: updatedArray });
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    const animalsList = animalFilter.map((animal) => {
      return (
        <Card
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          like={emoji.like}
          dislikes={animal.dislikes}
          removeCard={() => this.removeHandler(animal.name)}
          addDislikes={() => this.dislikeHandler(animal.name)}
          addLikes={() => this.addHandler(animal.name)}
        />
      );
    });

    return (
      <div className="outer-container">
        <Nav />
        <div className="search">
          <h2>
            Browse through our catalogue of{" "}
            <span>{this.state.animals.length}</span> animals and show some{" "}
            <span>&#10084;</span> to your favorites.
          </h2>
          <input
            onChange={this.searchHandler}
            type="text"
            placeholder="Search"
          />
        </div>
        <main className="container">{animalsList}</main>
      </div>
    );
  }
}

export default Animals;
