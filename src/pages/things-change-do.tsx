import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import { Graph, NodeType } from "../types/graph";

const content = `
- things
- change
- do
`;

const notes = `
- create legend for thing change do - consistent colours throughout
- everything we do helps change the thing we care for
- the thing we value can provide more value by change that we do
`;

export default function Page() {
  const graph: Graph = {
    nodes: [
      { index: 0, fx: 100, fy: 100, type: NodeType.Thing, size: 20 },
      { index: 1, fx: 100, fy: 200, type: NodeType.Change, size: 20 },
      { index: 2, fx: 100, fy: 300, type: NodeType.Do, size: 20 },
    ],
    links: [],
  };

  return (
    <Layout content={content} notes={notes}>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
