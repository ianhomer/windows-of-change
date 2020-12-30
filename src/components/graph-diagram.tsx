import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { SimulationNodeDatum, SimulationLinkDatum } from "d3-force";

interface Graph {
  nodes: SimulationNodeDatum[];
  links: SimulationLinkDatum<SimulationNodeDatum>[];
}

export default function GraphDiagram() {
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
      .selectAll<SVGCircleElement, SimulationNodeDatum>(".node")
      .data(graph.nodes)
      .join("circle")
      .attr("r", 10)
      .classed("node", true)
      .classed("fixed", (d: SimulationNodeDatum) => d.fx !== undefined);

    function tick() {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
      node
        .attr("cx", (d: SimulationNodeDatum) => d.x ?? 0)
        .attr("cy", (d: SimulationNodeDatum) => d.y ?? 0);
    }

    function click(this: SVGCircleElement, event: any, d: SimulationNodeDatum) {
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

    function dragstart(this: SVGCircleElement) {
      d3.select(this).classed("fixed", true);
    }

    function dragged(this: SVGCircleElement, event: any) {
      event.subject.fx = clamp(event.x, 0, width);
      event.subject.fy = clamp(event.y, 0, height);
      simulation.alpha(1).restart();
    }

    const drag = d3
      .drag<SVGCircleElement, SimulationNodeDatum, any>()
      .on("start", dragstart)
      .on("drag", dragged);

    node.call(drag).on("click", click);
  }, []);

  return <svg ref={ref} />;
}
