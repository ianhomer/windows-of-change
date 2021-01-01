import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import Toggle from "../components/toggle";
import { Graph, NodeType } from "../types/graph";
import { addNodes, removeNodes } from "../utils/graphish";
import { useState } from "react";

const notes = `
- Product - vision
- Delivery - flow
- Technical - engineering, build
- tension & balance
- sequence change
`;

export default function Page() {
  const [checked, setChecked] = useState(false);
  const [graph, setGraph] = useState<Graph>({
    nodes: [
      { id: "pl", index: 0, fx: 100, fy: 100, type: NodeType.Do, size: 20 },
      { id: "dl", index: 1, type: NodeType.Do, size: 20 },
      { id: "tl", index: 2, type: NodeType.Do, size: 20 },
    ],
    links: [],
  });

  const onChange = (checked: boolean) => {
    const newNodes = [
      { id: "change1", index: 3, type: NodeType.Change, size: 10 },
      { id: "change2", index: 4, type: NodeType.Change, size: 10 },
    ];
    setGraph(
      checked ? addNodes(graph, newNodes) : removeNodes(graph, newNodes)
    );

    setChecked(checked);
  };

  return (
    <Layout notes={notes}>
      <GraphDiagram graph={graph} />
      <Toggle checked={checked} onChange={onChange} />
    </Layout>
  );
}
