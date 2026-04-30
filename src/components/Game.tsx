import { useState, useEffect } from "react";
import Player from "./Player";
import Obstacle from "./Obstacle";
import Score from "./Score";
import { Position, Obstacle as ObstacleType } from "../types/game";
import "./Game.css";

function Game() {
  const [playerPos, setPlayerPos] = useState<Position>({ x: 0, y: 0 });
  const [score, setScore] = useState<number>(0);

  const [obstacles, setObstacles] = useState<ObstacleType[]>([
    { id: 1, x: 200, y: 150, width: 50, height: 50, type: "normal", points: 10 },
    { id: 2, x: 400, y: 300, width: 40, height: 40, type: "bonus", points: 50 },
    { id: 3, x: 600, y: 100, width: 60, height: 60, type: "normal", points: 10 },
  ]);

  useEffect(() => {
    if (!playerPos) return;

    // TODO: Implementar lógica de colisión
    // - Usar getBoundingClientRect() para obtener posiciones exactas en el DOM.
    // - Integración futura con colisiones: verificar solapamiento entre el Player y cada Obstacle.
    // - Si hay colisión, actualizar score y usar setObstacles para remover el obstáculo (si aplica).
  }, [playerPos, obstacles]);

  return (
    <div className="game-area">
      <Score value={score} />
      <Player onMove={setPlayerPos} />
      {obstacles.map((obs) => (
        <Obstacle key={obs.id} data={obs} />
      ))}
    </div>
  );
}

export default Game;
