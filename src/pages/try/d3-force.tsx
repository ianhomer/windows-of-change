import Layout from "../../components/layout";
import GraphDiagram from "../../components/graph-diagram";
import { Graph } from "../../types/graph";

export default function Page() {
  const graph: Graph = {
    nodes: [
      { id: "0", x: 0, y: 0, size: 20 },
      { id: "1", x: -100, y: -100 },
      { id: "2", x: 100, y: 100 },
    ],
    links: [
      { source: "0", target: "1" },
      { source: "0", target: "2" },
    ],
  };

  return (
    <Layout>
      <GraphDiagram graph={graph} className="inline" />
    </Layout>
  );
}
