import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import Toggle from "../components/toggle";
import { Graph, NodeType } from "../types/graph";
import { addNodes } from "../utils/graphish";
import { useState } from "react";

const content = `
- content
`;

export default function Page() {
  const [graph, setGraph] = useState<Graph>({
    nodes: [
      { index: 0, fx: 100, fy: 100, type: NodeType.Do, size: 20 },
      { index: 1, type: NodeType.Do, size: 20 },
      { index: 2, type: NodeType.Do, size: 20 },
    ],
    links: [],
  });

  const onChange = () => {
    console.log(graph);
    setGraph(
      addNodes(graph, [
        { index: 3, type: NodeType.Change, size: 10 },
        { index: 4, type: NodeType.Change, size: 10 },
      ])
    );
  };

  return (
    <Layout content={content}>
      <GraphDiagram graph={graph} />
      <Toggle checked={false} onChange={onChange} />
    </Layout>
  );
}
