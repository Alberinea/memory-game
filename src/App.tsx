import { useState, useEffect } from 'react';
import Header from './components/Header';
import Scores from './components/Scores';
import fetchCards, { Card } from './API';
import './styles/App.css';

const App = (): JSX.Element => {
  const [cards, setCards] = useState<Card[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function getCards() {
      const newCards = await fetchCards();
      setCards(newCards);
    }
    getCards();
  }, []);

  useEffect(() => {
    if (currentScore > bestScore) setBestScore(currentScore);
  }, [currentScore, bestScore]);

  function shuffleArray(
    setState: React.Dispatch<React.SetStateAction<Card[]>>
  ) {
    setState((prev) => prev.sort(() => Math.random() - 0.5));
  }

  function handleCard(id: string) {
    if (correctAnswers.includes(id)) {
      setCurrentScore(0);
    } else {
      setCorrectAnswers([...correctAnswers, id]);
      setCurrentScore((prevScore) => prevScore + 1);
      shuffleArray(setCards);
    }
  }

  return (
    <>
      <Header />
      <main>
        <Scores currentScore={currentScore} bestScore={bestScore} />
        <div className="cardContainer">
          {cards.map(({ imageUrl, key, id }) => {
            return (
              <input
                type="image"
                key={key}
                src={imageUrl}
                alt="Yu-Gi-Oh Card"
                onClick={() => handleCard(id)}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default App;
