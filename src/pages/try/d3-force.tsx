import Layout from "../../components/layout";
import GraphDiagram from "../../components/graph-diagram";
import { Graph } from "../../types/graph";

export default function Page() {
  const graph: Graph = {
    nodes: [
      { id: "0", fx: 100, fy: 200, size: 20 },
      { id: "1", fx: 200, fy: 200 },
      { id: "2", fx: 300, fy: 200 },
    ],
    links: [
      { source: "0", target: 1 },
      { source: "1", target: 2 },
    ],
  };

  return (
    <Layout>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
