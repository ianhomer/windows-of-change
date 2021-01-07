import Layout from "../../components/layout";
import GraphDiagram from "../../components/graph-diagram";
import { Graph } from "../../types/graph";

export default function Page() {
  const graph: Graph = {
    nodes: [{ id: "0", x: 100, y: 0, size: 20 }],
    links: [],
  };

  return (
    <Layout>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
