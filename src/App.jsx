import React, { Component } from 'react';
import './App.css';
import './card.css'
import './search.css'
import './main.css'
import Card from './Card'
import { animals } from './animals';

import Search from './Search'

class App extends Component {
  state = {
    animals: animals,
  }
  render() {

    const animalsList = animals.map((animal) => {
      return <Card key={animal.name} name={animal.name} likes={animal.likes} />
    })
    return (
        <div className='outer-container'>
            <Search />
          <main className='container'>
              {animalsList}
          </main>
        </div>
    );
  }
}

export default App;
