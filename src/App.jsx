import React, { Component } from 'react';
import './App.css';
import './card.css'
import './search.css'
import './main.css'
import Card from './Card'
import { animals } from './animals';


class App extends Component {
  state = {
    animals: animals,
    search: '',
  }

  addHandler = (name) => {
    this.setState(state => {
      const updatedArray = state.animals.map(animal => {
        if (animal.name === name) {
          return {...animal, likes:animal.likes + 1}
        } else {
          return animal
        }
      });
      return {
        animals: updatedArray
      }
    })
  }
  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({animals: updatedArray})
  }

  searchHandler = (e) => {
    this.setState({search: e.target.value})
  }
  
  render() {

    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name.toLowerCase().includes(this.state.search.toLowerCase())
    })

    const animalsList = animalFilter.map((animal) => {
      return <Card 
      key={animal.name} 
      name={animal.name} 
      likes={animal.likes} 
      removeCard={() => this.removeHandler(animal.name)} 
      addLikes={() => this.addHandler(animal.name)} />
    })

    return (
        <div className='outer-container'>
          <div className="search">
            <h1>{this.state.animals.length} Animals</h1>
            <input onChange={this.searchHandler} type="text" placeholder="Search" />
        </div>
          <main className='container'>
              {animalsList}
          </main>
        </div>
    );
  }
}

export default App;
