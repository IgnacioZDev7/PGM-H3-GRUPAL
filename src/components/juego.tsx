//importaciones
import { useState } from "react";
import Player from "./Player";
import Obstacle from "./Obstacle";
import Score from "./Score";
import { Position, Obstacle as ObstacleType } from "../types/game";


//funcion juego
function Juego() {
  //constante del jugador
  const [jugadorPos, setJugadorPos] = useState<Position>({ x: 0, y: 0 });
  //constante del score
  const [score, setScore] = useState(0);

  //constante del obstaculo
  const obstacles: ObstacleType[] = [
    { id: 1, x: 200, y: 100, width: 100, height: 100, type: "normal", points: 1 },
    { id: 2, x: 400, y: 200, width: 120, height: 120, type: "bonus", points: 5 }
  ];

  //se retorna el juego renderizado
  return (
    <div className="game-area">
      <Player onMove={setPlayerPos} />

      {obstacles.map((obs) => (
        <Obstacle key={obs.id} data={obs} />
      ))}

      <Score value={score} />
    </div>
  );
}

export default Game;