import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";

export default function Page() {
  const graph: Graph = {
    nodes: [
      { index: 0, x: 100, y: 100, vx: 0, vy: 0 },
      { index: 1, x: 100, y: 200, vx: 0, vy: 0 },
      { index: 2, x: 100, y: 200, vx: 0, vy: 0 },
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
