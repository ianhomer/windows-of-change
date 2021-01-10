import { cloneDeep, remove } from "lodash";
import { Graph, Node, Link } from "../types/graph";

// Take a string or string array and return a string
export function addNodes(graph: Graph, nodes: Node[]): Graph {
  const newGraph: Graph = cloneDeep(graph);
  newGraph.nodes.push(...nodes);
  return newGraph;
}

export function addLinks(graph: Graph, links: Link[]): Graph {
  const newGraph: Graph = cloneDeep(graph);
  newGraph.links.push(...links);
  return newGraph;
}

export function removeNodes(graph: Graph, nodes: Node[]): Graph {
  const newGraph: Graph = cloneDeep(graph);
  newGraph.nodes = remove(newGraph.nodes, (node: Node): boolean => {
    return !nodes.find((item) => {
      return item.id == node.id;
    });
  });
  return newGraph;
}

export function removeLinks(graph: Graph, links: Link[]): Graph {
  const newGraph: Graph = cloneDeep(graph);
  newGraph.links = remove(newGraph.links, (link: Link): boolean => {
    return !links.find((item) => {
      return item.id == link.id;
    });
  });
  return newGraph;
}
