import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import { Graph, NodeType } from "../types/graph";
import { addNodes } from "../utils/graphish";

const content = `
- content
`;

export default function Page() {
  // 3 Amigos
  const graph: Graph = {
    nodes: [
      { index: 0, fx: 100, fy: 100, type: NodeType.Do, size: 20 },
      { index: 1, type: NodeType.Do, size: 20 },
      { index: 2, type: NodeType.Do, size: 20 },
    ],
    links: [],
  };

  // 3 Amigos with desired changes
  const graphs = [graph];
  graphs.push(
    addNodes(graphs[0], [
      { index: 3, type: NodeType.Change, size: 10 },
      { index: 4, type: NodeType.Change, size: 10 },
    ])
  );

  return (
    <Layout content={content}>
      <GraphDiagram graph={graphs[1]} />
    </Layout>
  );
}
