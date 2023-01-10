import React, { memo, useEffect, useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import MemoryCard from './components/MemoryCard';
import Score from './components/Score';

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

  const [score, setScore] = useState({
    current: 0,
    high: 0,
  });

  useEffect(() => {
    const shuffle = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      };
    };

    return () => {
      console.log('use effect')
      shuffle(childIds);
    }
  },[memoryCards])

  const root = memoryCards[0];
  const childIds = root.childIds;

  const clickHandler = (e) => {
    const id = parseInt(e.target.id);

    if(memoryCards[id].clicked === true) {
      restartGame();    
    } else {
      setMemoryCards({
        ...memoryCards,
        [id]: {
          id: memoryCards[id].id,
          img: memoryCards[id].img,
          clicked: true,
        }
      });

      incrementScore();
    }
    console.log(memoryCards)
    console.log(score)
  };

  const restartGame = () => {
    setMemoryCards(
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

    setScore({
      current: 0,
      high: score.current,
    })
  }

  const incrementScore = () => {
    setScore({
      current: score.current + 1,
      high: score.high,
    })
  }
  


  
  return (
    <div>
      <Header/>
      {
        childIds.map((id) => {
          return <MemoryCard key={id} id={id} clickHandler={clickHandler} img={memoryCards[id].img}/>
        })
      }
      <Score currentScore={score.current} highScore={score.high}/>
    </div>
  );
}

export default App;