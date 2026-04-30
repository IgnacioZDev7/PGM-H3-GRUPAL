import { useRef, useState } from "react";
import Moveable from "react-moveable";
import { Position } from "../types/game";

interface Props {
  onMove: (pos: Position) => void;
}

function Player({ onMove }: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  return (
    <>
      <div
        ref={targetRef}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "blue",
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translate(${position.x}px, ${position.y}px)`,
          zIndex: 100,
          borderRadius: "8px",
          cursor: "grab",
        }}
      />
      
      <Moveable
        target={targetRef}
        draggable={true}
        onDrag={({ translate }) => {
          const newPos = { x: translate[0], y: translate[1] };
          setPosition(newPos);
          onMove(newPos);
        }}
      />
    </>
  );
}

export default Player;
