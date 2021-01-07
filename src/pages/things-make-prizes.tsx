import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import { Graph, NodeType } from "../types/graph";

export default function Page() {
  const graph: Graph = {
    nodes: [{ id: "thing", fx: 0, fy: -100, type: NodeType.Thing, size: 20 }],
    links: [],
  };

  return (
    <Layout>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
