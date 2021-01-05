import { SimulationNodeDatum, SimulationLinkDatum } from "d3-force";

export enum NodeType {
  Thing = "thing",
  Change = "change",
  Do = "do",
}

export enum LinkType {
  Desire = "desire",
  Dependency = "dependency",
}

export interface Node extends SimulationNodeDatum {
  id: string;
  size?: number;
  label?: string;
  type?: NodeType;
}

export interface Link extends SimulationLinkDatum<Node> {
  type?: LinkType;
}

export interface Graph {
  nodes: Node[];
  links: Link[];
}
