import Layout from "../components/layout";
import lesson from "../lessons/wrap";
import Stack from "../components/stack";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";
import DragAndDrop from "../components/drag-and-drop";
import Board from "../components/board";
import GraphDiagram from "../components/graph-diagram";
import { Graph, NodeType } from "../types/graph";

const positions = [
  { properties: ["name"] },
  { properties: ["name", "on"] },
  { properties: ["name", "on", "visual"] },
];

export default function Page() {
  const [position, setPosition] = useState(0);
  const [properties, setProperties] = useState(["name"]);

  const graph: Graph = {
    nodes: [
      { id: "0", fx: 300, fy: 0, size: 20, type: NodeType.Thing },
      { id: "1", x: 100, y: 0 },
      { id: "2", x: -100, y: 0 },
      { id: "3", x: -300, y: 0 },
      { id: "do-1", x: -200, y: 50, type: NodeType.Do },
      { id: "do-2", x: -200, y: -50, type: NodeType.Do },
    ],
    links: [
      { source: "1", target: "0" },
      { source: "2", target: "1" },
      { source: "3", target: "2" },
      { source: "do-1", target: "2" },
      { source: "do-2", target: "2" },
    ],
  };

  useEffect(() => {
    setProperties(positions[position].properties);
  }, [position]);

  const contents = [
    { left: 100, top: 300, children: "do", opacity: 0.5 },
    { left: 300, top: 300, children: "doing" },
  ];

  return (
    <Layout
      notes={lesson.notes}
      transition={transition(positions.length, setPosition)}
    >
      <Stack
        properties={properties}
        layers={[
          {
            name: "Aligned",
            on: "goals",
            visual: "1. ground to sky stack",
          },
          {
            name: "Priotised",
            on: "value",
            visual: "2. thing change do force",
          },
          { name: "Focused", on: "now", visual: "3. dream dashboard" },
        ]}
      />
      <DragAndDrop>
        <Board contents={contents} />
      </DragAndDrop>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
