import "./Game.css";

interface ScoreProps {
  value: number;
}

function Score({ value }: ScoreProps) {
  return (
    <div className="score-container">
      Score: {value}
    </div>
  );
}

export default Score;
