import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import MemoryCard from './components/MemoryCard';
import Score from './components/Score';
import image1 from './assets/Untitled-1.png';
import image2 from './assets/Untitled-2.png';
import image3 from './assets/Untitled-3.png';
import image4 from './assets/Untitled-4.png';
import image5 from './assets/Untitled-5.png';
import image6 from './assets/Untitled-6.png';
import image7 from './assets/Untitled-7.png';
import image8 from './assets/Untitled-8.png';
import image9 from './assets/Untitled-9.png';
import image10 from './assets/Untitled-10.png';
import image11 from './assets/Untitled-11.png';
import image12 from './assets/Untitled-12.png';
import image13 from './assets/Untitled-13.png';
import image14 from './assets/Untitled-14.png';
import image15 from './assets/Untitled-15.png';
import image16 from './assets/Untitled-16.png';

function App() {
  const [memoryCards, setMemoryCards] = useState(
    {
      0: {
        id: 0,
        childIds: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
      },
      1: {
        id: 1,
        img: image1,
        clicked: false,
      },
      2: {
        id: 2,
        img: image2,
        clicked: false,
      },
      3: {
        id: 3,
        img: image3,
        clicked: false,
      },
      4: {
        id: 4,
        img: image4,
        clicked: false,
      },
      5: {
        id: 5,
        img: image5,
        clicked: false,
      },
      6: {
        id: 6,
        img: image6,
        clicked: false,
      },
      7: {
        id: 7,
        img: image7,
        clicked: false,
      },
      8: {
        id: 8,
        img: image8,
        clicked: false,
      },
      9: {
        id: 9,
        img: image9,
        clicked: false,
      },
      10: {
        id: 10,
        img: image10,
        clicked: false,
      },
      11: {
        id: 11,
        img: image11,
        clicked: false,
      },
      12: {
        id: 12,
        img: image12,
        clicked: false,
      },
      13: {
        id: 13,
        img: image13,
        clicked: false,
      },
      14: {
        id: 14,
        img: image14,
        clicked: false,
      },
      15: {
        id: 15,
        img: image15,
        clicked: false,
      },
      16: {
        id: 16,
        img: image16,
        clicked: false,
      },
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
    };
  };

  const restartGame = () => {
    const highScore = () => {
      if(score.current > score.high) return score.current;
      else return score.high;
    }

    setMemoryCards(
      {
        0: {
          id: 0,
          childIds: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        },
        1: {
          id: 1,
          img: image1,
          clicked: false,
        },
        2: {
          id: 2,
          img: image2,
          clicked: false,
        },
        3: {
          id: 3,
          img: image3,
          clicked: false,
        },
        4: {
          id: 4,
          img: image4,
          clicked: false,
        },
        5: {
          id: 5,
          img: image5,
          clicked: false,
        },
        6: {
          id: 6,
          img: image6,
          clicked: false,
        },
        7: {
          id: 7,
          img: image7,
          clicked: false,
        },
        8: {
          id: 8,
          img: image8,
          clicked: false,
        },
        9: {
          id: 9,
          img: image9,
          clicked: false,
        },
        10: {
          id: 10,
          img: image10,
          clicked: false,
        },
        11: {
          id: 11,
          img: image11,
          clicked: false,
        },
        12: {
          id: 12,
          img: image12,
          clicked: false,
        },
        13: {
          id: 13,
          img: image13,
          clicked: false,
        },
        14: {
          id: 14,
          img: image14,
          clicked: false,
        },
        15: {
          id: 15,
          img: image15,
          clicked: false,
        },
        16: {
          id: 16,
          img: image16,
          clicked: false,
        },
      }
    );

    setScore({
      current: 0,
      high: highScore(),
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
      <Score currentScore={score.current} highScore={score.high}/>
      <div className='card-container'>
        {
          childIds.map((id) => {
            return <MemoryCard key={id} id={id} clickHandler={clickHandler} img={memoryCards[id].img}/>
          })
        }
      </div>
    </div>
  );
}

export default App;