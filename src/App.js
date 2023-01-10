import React, { useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import MemoryCard from './components/MemoryCard';

// Generate 16 unique cards
// On click - register the card as clicked
// Shuffle position of all cards
// On each unique click, increment score
// If same card clicked, restart
// Record high score


function App() {
  const [memoryCards, setMemoryCards] = useState(
    [
      {
        id: 0,
        img: 'placeholder',
        clicked: false,
      },
      {
        id: 1,
        img: 'another placeholder',
        clicked: false,
      },
    ]
  );

  const clickHandler = (e) => {
    memoryCards.map((element) => {
      if(element.id === e.target.id) {

      }
    })

    console.log(e.target.id)


  }
  
  return (
    <div>
      <Header></Header>
      {
        memoryCards.map((element) => {
          return <MemoryCard key={element.id} id={element.id} clickHandler={clickHandler}/>
        })
      }
    </div>
  );
}

export default App;