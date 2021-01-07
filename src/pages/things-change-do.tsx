import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import { Graph, NodeType } from "../types/graph";
import lesson from "../lessons/things-change-do";

export default function Page() {
  const graph: Graph = {
    nodes: [
      {
        id: "thing",
        fx: 0,
        fy: -100,
        type: NodeType.Thing,
        size: 20,
        label: "thing",
      },
      {
        id: "change",
        fx: 0,
        fy: 0,
        type: NodeType.Change,
        size: 20,
        label: "change",
      },
      { id: "do", fx: 0, fy: 100, type: NodeType.Do, size: 20, label: "do" },
    ],
    links: [],
  };

  return (
    <Layout>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
