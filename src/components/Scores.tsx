import '../styles/Scores.css';

interface Props {
  currentScore: number;
  bestScore: number;
}

const Scores: React.FC<Props> = ({ currentScore, bestScore }): JSX.Element => {
  return (
    <div className="scoresContainer">
      <div className="scores">
        Current Score <br />
        <strong>{currentScore}</strong>
      </div>
      <div className="scores">
        Best Score <br />
        <strong>{bestScore}</strong>
      </div>
    </div>
  );
};

export default Scores;
