import { Obstacle as ObstacleType } from "../types/game";
import "./Game.css";

interface ObstacleProps {
  data: ObstacleType;
}

function Obstacle({ data }: ObstacleProps) {
  const isBonus = data.type === "bonus";

  const style = {
    position: "absolute" as const,
    left: `${data.x}px`,
    top: `${data.y}px`,
    width: `${data.width}px`,
    height: `${data.height}px`,
  };

  return (
    <div
      className={`obstacle ${isBonus ? "obstacle-bonus" : "obstacle-normal"}`}
      style={style}
    />
  );
}

export default Obstacle;
