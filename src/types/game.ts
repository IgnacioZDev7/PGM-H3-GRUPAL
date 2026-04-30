//definicion de los tipos x & y

//se exporta el tipo position
export type position = {
    x:number;
    y:number;
}

//se exporta el tipo obstaculo
export type ObstacleType = "normal" | "bonus";

//se exporta el tipo con 
export type Obstacle = {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    type: ObstacleType;
    points: number;
};