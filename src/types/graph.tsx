import { SimulationNodeDatum, SimulationLinkDatum } from "d3-force";

export interface Graph {
  nodes: SimulationNodeDatum[];
  links: SimulationLinkDatum<SimulationNodeDatum>[];
}
