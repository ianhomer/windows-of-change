import { Graph } from "../types/graph";

const basic: Graph = {
  nodes: [{ id: "0", x: 0, y: 0, size: 20 }],
  links: [],
};

const graphs: Record<string, Graph> = {
  basic,
};

export default graphs;
