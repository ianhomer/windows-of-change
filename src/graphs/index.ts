import { Graph, NodeType } from "../types/graph";

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
    { id: 0, fx: 400, fy: 0, size: 20, type: NodeType.Thing },
    { id: 1, x: 0, y: 0 },
    { id: 2, x: 0, y: 0 },
    { id: 3, x: 0, y: 0 },
  ],
  links: [
    { source: 1, target: 0 },
    { source: 2, target: 1 },
    { source: 3, target: 2 },
  ],
};

const singleWip: Graph = {
  nodes: [
    { id: 0, fx: 400, fy: 0, size: 40, type: NodeType.Thing },
    { id: "goal-1", x: 0, y: 0, size: 20 },
    { id: "goal-2", x: 0, y: 0, size: 20 },
    { id: 1, x: 0, y: 0 },
    { id: 2, x: 0, y: 0 },
    { id: 3, x: 0, y: 0 },
    { id: 4, x: 0, y: 0 },
  ],
  links: [
    { source: "goal-1", target: 0 },
    { source: "goal-2", target: "goal-1" },
    { source: 1, target: "goal-1" },
    { source: 2, target: "goal-1" },
    { source: 3, target: "goal-2" },
    { source: 4, target: "goal-2" },
  ],
};

const multipleWip: Graph = {
  nodes: [
    { id: 0, fx: 400, fy: 0, size: 40, type: NodeType.Thing },
    { id: "goal-1", x: 0, y: 0, size: 20 },
    { id: "goal-2", x: 0, y: 0, size: 20 },
    { id: 1, x: 0, y: 0 },
    { id: 2, x: 0, y: 0 },
    { id: 3, x: 0, y: 0 },
    { id: 4, x: 0, y: 0 },
  ],
  links: [
    { source: "goal-1", target: 0 },
    { source: "goal-2", target: "goal-1" },
    { source: 1, target: "goal-1" },
    { source: 2, target: "goal-1" },
    { source: 3, target: "goal-2" },
    { source: 3, target: 0 },
    { source: 4, target: "goal-2" },
  ],
};

const graphs: Record<string, Graph> = {
  single,
  multiple,
  trunk,
  "single-wip": singleWip,
  "multiple-wip": multipleWip,
};

export default graphs;
