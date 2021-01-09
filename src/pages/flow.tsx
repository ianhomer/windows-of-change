import Layout from "../components/layout";
import lesson from "../lessons/flow";
import GraphDiagram from "../components/graph-diagram";
import { Graph, NodeType } from "../types/graph";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

const positions = [
  { dos: false, goals: false },
  { dos: true, goals: false },
  { dos: true, goals: true },
];

const createGraph = (position = { dos: false, goals: false }): Graph => {
  return {
    nodes: [
      {
        id: "thing-1",
        fx: 300,
        fy: 0,
        type: NodeType.Thing,
        size: 40,
        label: "thing",
      },
      { id: "change-1", x: 100, y: 0, type: NodeType.Change, size: 20 },
      { id: "change-2", x: -100, y: 0, type: NodeType.Change, size: 20 },
      { id: "change-3", x: -200, y: 0, type: NodeType.Change, size: 20 },
      ...(position.dos
        ? [
            {
              id: "do-1",
              x: 200,
              y: 0,
              type: NodeType.Do,
              size: 10,
            },
            { id: "do-2", x: 200, y: 0, type: NodeType.Do, size: 20 },
            { id: "do-3", x: -100, y: 0, type: NodeType.Do, size: 10 },
            { id: "do-4", x: -100, y: 0, type: NodeType.Do, size: 5 },
            {
              id: "do-5",
              x: -100,
              y: 0,
              type: NodeType.Do,
              size: 5,
              label: "do",
            },
          ]
        : []),
      ...(position.goals
        ? [
            {
              id: "goal-1",
              x: 300,
              y: -100,
              type: NodeType.Change,
              size: 40,
              label: "goal",
            },
          ]
        : []),
    ],
    links: [
      { target: "change-1", source: "thing-1" },
      { target: "change-2", source: "change-1" },
      { target: "change-3", source: "change-2" },
      ...(position.dos
        ? [
            { target: "do-1", source: "change-1" },
            { target: "do-2", source: "change-1" },
            { target: "do-3", source: "change-2" },
            { target: "do-4", source: "change-2" },
          ]
        : []),
      ...(position.goals
        ? [
            { target: "change-2", source: "goal-1" },
            { target: "do-5", source: "goal-1" },
            { target: "goal-1", source: "thing-1" },
          ]
        : []),
    ],
  };
};

export default function Page() {
  const [position, setPosition] = useState(0);
  const [graph, setGraph] = useState(createGraph());

  useEffect(() => {
    setGraph(createGraph(positions[position]));
  }, [position]);

  return (
    <Layout
      notes={lesson.notes}
      content={lesson.content}
      transition={transition(positions.length, setPosition)}
    >
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
