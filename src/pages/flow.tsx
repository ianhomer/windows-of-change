import Layout from "../components/layout";
import lesson from "../lessons/flow";
import GraphDiagram from "../components/graph-diagram";
import { Graph, NodeType } from "../types/graph";

export default function Page() {
  const graph: Graph = {
    nodes: [
      { index: 0, fx: 500, fy: 200, type: NodeType.Thing, size: 40 },
      { index: 1, type: NodeType.Change, size: 20 },
      { index: 2, type: NodeType.Change, size: 20 },
      { index: 3, type: NodeType.Do, size: 10 },
      { index: 4, type: NodeType.Do, size: 10 },
      { index: 5, type: NodeType.Do, size: 10 },
    ],
    links: [
      { source: 1, target: 0 },
      { source: 2, target: 0 },
      { source: 3, target: 1 },
      { source: 4, target: 1 },
      { source: 5, target: 2 },
    ],
  };

  return (
    <Layout lesson={lesson}>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
