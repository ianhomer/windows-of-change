import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import { Graph } from "../types/graph";

const content = `
- things
- change
- do
`;

export default function Page() {
  const graph: Graph = {
    nodes: [
      { index: 0, fx: 100, fy: 100, size: 20 },
      { index: 1, fx: 100, fy: 200 },
      { index: 2, fx: 100, fy: 300 },
    ],
    links: [],
  };

  return (
    <Layout content={content}>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
