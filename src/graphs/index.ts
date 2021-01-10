import { Graph } from "../types/graph";

const single: Graph = {
  nodes: [{}],
  links: [],
};

const multiple: Graph = {
  nodes: [{}, {}, {}],
  links: [],
};

const trunk: Graph = {
  nodes: [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ],
  links: [],
};

const graphs: Record<string, Graph> = {
  single,
  multiple,
  trunk,
};

export default graphs;
