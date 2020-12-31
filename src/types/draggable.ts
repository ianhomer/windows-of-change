export interface Draggable {
  id: string;
  type: string;
  left: number;
  top: number;
  move: (delta: Delta) => void;
}

export interface Delta {
  x: number;
  y: number;
}
