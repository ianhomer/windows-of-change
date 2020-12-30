import Layout from "../components/layout";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { SimulationNodeDatum, SimulationLinkDatum } from "d3-force";

interface Graph {
  nodes: SimulationNodeDatum[];
  links: SimulationLinkDatum<SimulationNodeDatum>[];
}

export default function Page() {
  const ref = useRef(null);
  const width = 400;
  const height = 400;

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

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    const link = svg
      .selectAll(".link")
      .data(graph.links)
      .join("line")
      .classed("link", true);

    const node = svg
      .selectAll(".node")
      .data(graph.nodes)
      .join("circle")
      .attr("r", 10)
      .classed("node", true)
      .classed("fixed", (d: any) => d.fx !== undefined);

    function tick() {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
    }

    function click(this: Element, event: any, d: any) {
      delete d.fx;
      delete d.fy;
      d3.select(event.currentTarget).classed("fixed", false);
      simulation.alpha(1).restart();
    }

    function clamp(x: number, low: number, high: number) {
      return x < low ? low : x > high ? high : x;
    }

    const simulation = d3
      .forceSimulation()
      .nodes(graph.nodes)
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink(graph.links))
      .on("tick", tick);

    function dragstart(event: any) {
      d3.select(event.currentTarget).classed("fixed", true);
    }

    function dragged(this: Element, event: any, d: any) {
      d.fx = clamp(event.x, 0, width);
      d.fy = clamp(event.y, 0, height);
      simulation.alpha(1).restart();
    }

    d3.drag().on("start", dragstart).on("drag", dragged);

    //node.call(drag).on("click", click);
  }, []);

  return (
    <Layout>
      <svg ref={ref} />
    </Layout>
  );
}
