import { SimulationNodeDatum, SimulationLinkDatum } from "d3-force";

export enum NodeType {
  Generic = "generic",
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
  id?: string;
  type?: LinkType;
  size?: number;
}

export interface Graph {
  nodes: Node[];
  links: Link[];
}
