import { SimulationNodeDatum, SimulationLinkDatum } from "d3-force";

export interface Node extends SimulationNodeDatum {
  size?: number;
  label?: string;
}
export interface Graph {
  nodes: Node[];
  links: SimulationLinkDatum<Node>[];
}
