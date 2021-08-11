import '../styles/Scores.css';

const Scores = (): JSX.Element => {
  return (
    <div className="scoresContainer">
      <div className="scores">
        Current Score <br /> 0
      </div>
      <div className="scores">
        Best Score <br /> 0
      </div>
    </div>
  );
};

export default Scores;
