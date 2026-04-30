import { RefObject } from "react";
import { isColliding } from "../utils/collision";

export function useCollision() {
  const checkCollisions = (
    playerRef: RefObject<HTMLElement | null>,
    obstacleRefs: RefObject<HTMLElement | null>[]
  ): number[] => {
    if (!playerRef.current) return [];

    const playerRect = playerRef.current.getBoundingClientRect();
    const collidedIndexes: number[] = [];

    obstacleRefs.forEach((obsRef, index) => {
      if (obsRef.current) {
        const obsRect = obsRef.current.getBoundingClientRect();
        if (isColliding(playerRect, obsRect)) {
          collidedIndexes.push(index);
        }
      }
    });

    return collidedIndexes;
  };

  return { checkCollisions };
}
