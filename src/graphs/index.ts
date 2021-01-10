import { Graph, NodeType } from "../types/graph";

const single: Graph = {
  nodes: [{ id: "0", type: NodeType.Generic }],
  links: [],
};

const multiple: Graph = {
  nodes: [{ id: "0" }, { id: "1" }, { id: "2" }],
  links: [],
};

const trunk: Graph = {
  nodes: [
    { id: "0", fx: 400, fy: 0, size: 20, type: NodeType.Thing },
    { id: "1", x: 0, y: 0 },
    { id: "2", x: 0, y: 0 },
    { id: "3", x: 0, y: 0 },
  ],
  links: [
    { source: "1", target: "0" },
    { source: "2", target: "1" },
    { source: "3", target: "2" },
  ],
};

const singleWip: Graph = {
  nodes: [
    { id: "0", fx: 400, fy: 0, size: 40, type: NodeType.Thing },
    { id: "goal-1", x: 0, y: 0, size: 20 },
    { id: "goal-2", x: 0, y: 0, size: 20 },
    { id: "1", x: 0, y: 0 },
    { id: "2", x: 0, y: 0 },
    { id: "3", x: 0, y: 0 },
    { id: "4", x: 0, y: 0 },
  ],
  links: [
    { source: "goal-1", target: "0" },
    { source: "goal-2", target: "goal-1" },
    { source: "1", target: "goal-1" },
    { source: "2", target: "goal-1" },
    { source: "3", target: "goal-2" },
    { source: "4", target: "goal-2" },
  ],
};

const multipleWip: Graph = {
  nodes: [
    { id: "0", fx: 400, fy: 0, size: 40, type: NodeType.Thing },
    { id: "goal-1", x: 0, y: 0, size: 20 },
    { id: "goal-2", x: 0, y: 0, size: 20 },
    { id: "1", x: 0, y: 0 },
    { id: "2", x: 0, y: 0 },
    { id: "3", x: 0, y: 0 },
    { id: "4", x: 0, y: 0 },
  ],
  links: [
    { source: "goal-1", target: "0" },
    { source: "goal-2", target: "goal-1" },
    { source: "1", target: "goal-1" },
    { source: "2", target: "goal-1" },
    { source: "3", target: "goal-2" },
    { source: "3", target: "0" },
    { source: "4", target: "goal-2" },
  ],
};

const unaligned: Graph = {
  nodes: [
    { id: "0", fx: 400, fy: 0, size: 40, type: NodeType.Thing },
    { id: "goal-1", x: 0, y: 0, size: 20 },
    { id: "goal-2", x: 0, y: 0, size: 20 },
    { id: "1", x: 0, y: 0 },
    { id: "2", x: 0, y: 0 },
    { id: "3", x: 0, y: 0 },
    { id: "4", x: 0, y: 0 },
  ],
  links: [
    { source: "goal-1", target: "0" },
    { source: "goal-2", target: "goal-1" },
    { source: "1", target: "goal-1" },
    { source: "2", target: "goal-1" },
    { source: "3", target: "goal-2" },
    { source: "4", target: "0" },
  ],
};

const unrequiredChange: Graph = {
  nodes: [
    { id: "0", fx: 400, fy: 0, size: 20, type: NodeType.Thing },
    { id: "1", x: 0, y: 0 },
    { id: "2", x: 0, y: 0, type: NodeType.Change },
  ],
  links: [{ source: "1", target: "0" }],
};

const steadyValue: Graph = {
  nodes: [
    { id: "0", fx: 400, fy: 0, size: 20, type: NodeType.Thing },
    { id: "1", x: 0, y: 0 },
    { id: "2", x: 0, y: 0, size: 5 },
    { id: "3", x: 0, y: 0, size: 30 },
    { id: "101", x: 0, y: 0, type: NodeType.Do },
    { id: "102", x: 0, y: 0, size: 5, type: NodeType.Do },
    { id: "103", x: 0, y: 0, size: 30, type: NodeType.Do },
  ],
  links: [
    { source: "1", target: "0" },
    { source: "2", target: "1" },
    { source: "3", target: "2" },
    { source: "101", target: "1" },
    { source: "102", target: "2" },
    { source: "103", target: "3" },
  ],
};

const lumpyValue: Graph = {
  nodes: [
    { id: "0", fx: 400, fy: 0, size: 20, type: NodeType.Thing },
    { id: "1", x: 0, y: 0, size: 10 },
    { id: "2", x: 0, y: 0 },
    { id: "3", x: 0, y: 0, size: 30 },
    { id: "101", x: 0, y: 0, size: 40, type: NodeType.Do },
    { id: "102", x: 0, y: 0, size: 5, type: NodeType.Do },
    { id: "103", x: 0, y: 0, type: NodeType.Do },
  ],
  links: [
    { source: "1", target: "0" },
    { source: "2", target: "1" },
    { source: "3", target: "2" },
    { source: "101", target: "1" },
    { source: "102", target: "2" },
    { source: "103", target: "3" },
  ],
};

const graphs: Record<string, Graph> = {
  single,
  multiple,
  trunk,
  "single-wip": singleWip,
  "multiple-wip": multipleWip,
  unaligned,
  "unrequired-change": unrequiredChange,
  "steady-value": steadyValue,
  "lumpy-value": lumpyValue,
};

export default graphs;
