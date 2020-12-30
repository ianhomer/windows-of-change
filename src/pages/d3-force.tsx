import Layout from "../components/layout";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Page() {
  const ref = useRef(null);
  const width = 400;
  const height = 400;

  const graph = {
    nodes: [
      { index: 0, x: 100, y: 100, vx: 0, yx: 0 },
      { index: 1, x: 100, y: 200, vx: 1, yx: 1 },
    ],
    links: [{ source: 0, target: 1 }],
  };

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg.selectAll(".link").data(graph.links).join("line").classed("link", true);

    svg
      .selectAll(".node")
      .data(graph.nodes)
      .join("circle")
      .attr("r", 10)
      .classed("node", true);

    svg.node();

    d3.forceSimulation()
      .nodes(graph.nodes)
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink(graph.links));
  }, []);

  return (
    <Layout>
      <div ref={ref} />
    </Layout>
  );
}
