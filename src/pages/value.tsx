import Layout from "../components/layout";
import GraphDiagram from "../components/graph-diagram";
import { Graph, NodeType } from "../types/graph";

export default function Page() {
  const graph: Graph = {
    nodes: [
      {
        id: "value",
        index: 0,
        fx: 200,
        fy: -150,
        type: NodeType.Generic,
        size: 20,
        label: "Value ; maximise",
      },
      {
        id: "cost",
        index: 1,
        fx: -50,
        fy: 0,
        type: NodeType.Generic,
        size: 20,
        label: "Effort ; on target",
      },
      {
        id: "flow",
        index: 2,
        fx: 350,
        fy: 150,
        type: NodeType.Generic,
        size: 20,
        label: "Flow ; efficiency",
      },
    ],
    links: [
      { source: "flow", target: "cost" },
      { source: "value", target: "cost" },
      { source: "flow", target: "value" },
    ],
  };

  const content = `
- c.f product / tech / delivery
- forces that drive our decisions
- how efficiently can we convert effort into value?
- how much effort can we apply?
- ~(scale teams without reduction in efficiency)~
- visualise to be mindful of our decisions
- expected effort driving sequencing (what next?) ~not forecasting~
`;
  return (
    <Layout content={content}>
      <GraphDiagram graph={graph} />
    </Layout>
  );
}
