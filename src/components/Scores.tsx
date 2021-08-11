import '../styles/Scores.css';

interface Props {
  currentScore: number;
  bestScore: number;
}

const Scores: React.FC<Props> = ({ currentScore, bestScore }): JSX.Element => {
  return (
    <div className="scoresContainer">
      <div className="scores">
        Current Score <br /> {currentScore}
      </div>
      <div className="scores">
        Best Score <br /> {bestScore}
      </div>
    </div>
  );
};

export default Scores;
