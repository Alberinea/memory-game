/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Scores from './components/Scores';
import fetchCards, { Card } from './API';
import './styles/App.css';

const INITIAL_CARD_NUMBER = 5;

const App = (): JSX.Element => {
  const [cards, setCards] = useState<Card[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsNumber, setCardsNumber] = useState(INITIAL_CARD_NUMBER);
  const [loadingCount, setLoadingCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setCards([]);
    if (gameOver) return;

    setLoading(true);
    setLoadingCount(0);

    async function getCards() {
      const newCards = await fetchCards(cardsNumber);
      setCards(newCards);
    }
    getCards();
  }, [cardsNumber, gameOver]);

  useEffect(() => {
    if (currentScore > bestScore) setBestScore(currentScore);
  }, [currentScore, bestScore]);

  useEffect(() => {
    if (correctAnswers.length === cardsNumber) {
      setCardsNumber((prev) => prev + INITIAL_CARD_NUMBER);
      setCorrectAnswers([]);
    }
  }, [correctAnswers, cardsNumber]);

  useEffect(() => {
    if (loadingCount === cardsNumber) setLoading(false);
  }, [loadingCount, cardsNumber]);

  function shuffleArray(
    setState: React.Dispatch<React.SetStateAction<Card[]>>
  ) {
    setState((prev) => prev.sort(() => Math.random() - 0.5));
  }

  function reset() {
    setCurrentScore(0);
    setCorrectAnswers([]);
    setGameOver(true);
    setCardsNumber(INITIAL_CARD_NUMBER);
  }

  function handleCard(id: string) {
    shuffleArray(setCards);
    if (correctAnswers.includes(id)) {
      reset();
    } else {
      setCorrectAnswers([...correctAnswers, id]);
      setCurrentScore((prevScore) => prevScore + 1);
    }
  }

  return (
    <>
      <Header />
      <main>
        <Scores currentScore={currentScore} bestScore={bestScore} />
        <div className="cardContainer">
          {loading && <h2 className="load">Loading...</h2>}
          {gameOver && (
            <div>
              <h2 className="load">Game Over</h2>
              <button
                className="load"
                type="button"
                onClick={() => setGameOver(false)}
              >
                Play Again
              </button>
            </div>
          )}
          {!gameOver &&
            cards.map(({ imageUrl, key, id }) => {
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <img
                  style={loading ? { display: 'none' } : { display: 'block' }}
                  key={key}
                  src={imageUrl}
                  alt="Yu-Gi-Oh Card"
                  onClick={() => handleCard(id)}
                  onLoad={() => setLoadingCount((prev) => prev + 1)}
                />
              );
            })}
        </div>
      </main>
    </>
  );
};

export default App;
