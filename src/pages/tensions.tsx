import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import Toggle from "../components/toggle";
import { Graph, NodeType } from "../types/graph";
import {
  addLinks,
  addNodes,
  removeLinks,
  removeNodes,
} from "../utils/graphish";
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
        id: "thing",
        index: 4,
        type: NodeType.Thing,
        size: 30,
        fx: 300,
        label: "thing",
      },

      {
        id: "change1",
        index: 3,
        type: NodeType.Change,
        size: 10,
      },
      {
        id: "change2",
        index: 4,
        type: NodeType.Change,
        size: 10,
      },
    ];
    const newLinks = [
      {
        id: "1",
        source: "change1",
        target: "thing",
      },
      {
        id: "2",
        source: "change2",
        target: "change1",
      },
      {
        id: "pl-change1",
        source: "pl",
        target: "change1",
      },
      {
        id: "tl-change1",
        source: "tl",
        target: "change1",
      },
      {
        id: "dl-change2",
        source: "dl",
        target: "change2",
      },
    ];
    setGraph(
      checked
        ? addLinks(addNodes(graph, newNodes), newLinks)
        : removeLinks(removeNodes(graph, newNodes), newLinks)
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
