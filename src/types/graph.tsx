import { SimulationNodeDatum, SimulationLinkDatum } from "d3-force";

export enum NodeType {
  Thing = "thing",
  Change = "change",
  Do = "do",
}

export interface Node extends SimulationNodeDatum {
  size?: number;
  label?: string;
  type?: NodeType;
}
export interface Graph {
  nodes: Node[];
  links: SimulationLinkDatum<Node>[];
}
