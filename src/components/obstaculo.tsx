//importaciones de tipos
import type { Obstacle as ObstacleType } from "../types/game";

//tipo props
type Props = {
  data: ObstacleType;
};

//funcion obstaculo
function Obstaculo({ data }: Props) {
  //se retorna el obstaculo
  return (
    <div
      style={{
        position: "absolute",
        left: data.x,
        top: data.y,
        width: data.width,
        height: data.height,
        background: data.type === "bonus" ? "purple" : "red"
      }}
    />
  );
}

export default Obstaculo;