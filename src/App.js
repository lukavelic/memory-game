import React, { memo, useState } from 'react';
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
    {
      0: {
        id: 0,
        childIds: [1,2]
      },
      1: {
        id: 1,
        img: 'placeholder',
        clicked: false,
      },
      2: {
        id: 2,
        img: 'another placeholder',
        clicked: false,
      }
    }
  );

  const root = memoryCards[0];
  const childIds = root.childIds;

  const clickHandler = (e) => {
    const id = parseInt(e.target.id);

    setMemoryCards({
      ...memoryCards,
      [id]: {
        id: memoryCards[id].id,
        img: memoryCards[id].img,
        clicked: true,
      }
    });

    shuffle(childIds);
  };

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
  };
  
  return (
    <div>
      <Header></Header>
      {
        childIds.map((id) => {
          return <MemoryCard key={id} id={id} clickHandler={clickHandler} img={memoryCards[id].img}/>
        })
      }
    </div>
  );
}

export default App;