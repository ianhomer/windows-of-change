import { cloneDeep } from "lodash";
import { Graph, Node } from "../types/graph";

// Take a string or string array and return a string
export function addNodes(graph: Graph, nodes: Node[]): Graph {
  const newGraph: Graph = cloneDeep(graph);
  newGraph.nodes.push(...nodes);
  return newGraph;
}
