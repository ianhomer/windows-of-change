import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import Toggle from "../components/toggle";
import { Graph, NodeType } from "../types/graph";
import { addNodes, removeNodes } from "../utils/graphish";
import { useState } from "react";
import lesson from "../lessons/tensions";

export default function Page() {
  const [checked, setChecked] = useState(false);
  const [graph, setGraph] = useState<Graph>({
    nodes: [
      {
        id: "pl",
        index: 0,
        x: 0,
        y: -150,
        type: NodeType.Do,
        size: 20,
        label: "Product Lead",
      },
      {
        id: "dl",
        index: 1,
        x: -150,
        y: 150,
        type: NodeType.Do,
        size: 20,
        label: "Technical Lead",
      },
      {
        id: "tl",
        index: 2,
        x: 150,
        y: 150,
        type: NodeType.Do,
        size: 20,
        label: "Delivery Lead",
      },
    ],
    links: [],
  });

  const onChange = (checked: boolean) => {
    const newNodes = [
      {
        id: "change1",
        index: 3,
        type: NodeType.Change,
        size: 10,
        label: "change",
      },
      {
        id: "change2",
        index: 4,
        type: NodeType.Change,
        size: 10,
        label: "change",
      },
    ];
    setGraph(
      checked ? addNodes(graph, newNodes) : removeNodes(graph, newNodes)
    );

    setChecked(checked);
  };

  return (
    <Layout lesson={lesson}>
      <GraphDiagram graph={graph} />
      <Toggle checked={checked} onChange={onChange} />
    </Layout>
  );
}
