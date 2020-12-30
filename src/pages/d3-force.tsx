import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";

export default function Page() {
  const graph: Graph = {
    nodes: [
      { index: 0, fx: 100, fy: 200 },
      { index: 1, fx: 200, fy: 200 },
      { index: 2, fx: 300, fy: 200 },
    ],
    links: [
      { source: 0, target: 1 },
      { source: 1, target: 2 },
    ],
  };

  return (
    <Layout>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
