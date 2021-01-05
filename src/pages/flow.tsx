import Layout from "../components/layout";
import lesson from "../lessons/flow";
import GraphDiagram from "../components/graph-diagram";
import { Graph, NodeType } from "../types/graph";

export default function Page() {
  const graph: Graph = {
    nodes: [
      { id: "thing-1", fx: 500, fy: 200, type: NodeType.Thing, size: 40 },
      { id: "change-1", type: NodeType.Change, size: 20 },
      { id: "change-2", type: NodeType.Change, size: 20 },
      { id: "do-1", type: NodeType.Do, size: 10 },
      { id: "do-2", type: NodeType.Do, size: 10 },
      { id: "do-3", type: NodeType.Do, size: 10 },
    ],
    links: [
      { source: "change-1", target: "thing-1" },
      { source: "change-2", target: "thing-1" },
      { source: "do-1", target: "change-1" },
      { source: "do-2", target: "change-1" },
      { source: "do-3", target: "change-2" },
    ],
  };

  return (
    <Layout lesson={lesson}>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
