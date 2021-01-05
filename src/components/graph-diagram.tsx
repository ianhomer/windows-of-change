import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Node, Link, Graph } from "../types/graph";

interface GraphDiagramProps {
  graph: Graph;
}

export default function GraphDiagram(props: GraphDiagramProps) {
  const ref = useRef(null);
  const width = 800;
  const height = 400;

  // Initial Load
  useEffect(() => {
    console.log("useEffect 1");
    d3.select(ref.current).attr("width", width).attr("height", height);
  }, []);

  // props update
  useEffect(() => {
    console.log("useEffect 2");
    const svg = d3.select(ref.current);

    const link = svg
      .selectAll(".link")
      .data(props.graph.links)
      .join("line")
      .classed("link", true)
      .attr("stroke-width", (d: Link) => d.size ?? 1);

    const node = svg
      .selectAll<SVGCircleElement, Node>(".node")
      .data(props.graph.nodes)
      .join("circle")
      .attr("r", (d: Node) => d?.size ?? 10)
      .attr("data-type", (d: Node) => d?.type ?? "unknown")
      .classed("node", true)
      .classed("fixed", (d: Node) => d.fx !== undefined);

    function tick() {
      link
        .attr("x1", (d: any) => d.source.x ?? 0)
        .attr("y1", (d: any) => d.source.y ?? 0)
        .attr("x2", (d: any) => d.target.x ?? 0)
        .attr("y2", (d: any) => d.target.y ?? 0);
      node.attr("cx", (d: Node) => d.x ?? 0).attr("cy", (d: Node) => d.y ?? 0);
    }

    function click(this: SVGCircleElement, event: any, d: Node) {
      delete d.fx;
      delete d.fy;
      d3.select(event.currentTarget).classed("fixed", false);
      simulation.alpha(1).restart();
    }

    const forceLink = d3.forceLink<Node, Link>(props.graph.links);

    const simulation = d3
      .forceSimulation()
      .nodes(props.graph.nodes)
      .force("charge", d3.forceManyBody().strength(-800))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "link",
        forceLink.id((d: Node) => d.id)
      )
      .on("tick", tick);

    function dragstart(this: SVGCircleElement) {
      d3.select(this).classed("fixed", true);
    }

    function clamp(x: number, low: number, high: number) {
      return x < low ? low : x > high ? high : x;
    }

    function dragged(this: SVGCircleElement, event: any) {
      event.subject.fx = clamp(event.x, 0, width);
      event.subject.fy = clamp(event.y, 0, height);
      simulation.alpha(1).restart();
    }

    const drag = d3
      .drag<SVGCircleElement, Node, any>()
      .on("start", dragstart)
      .on("drag", dragged);

    node.call(drag).on("click", click);
  }, [props]);

  return (
    <>
      <svg ref={ref} />
    </>
  );
}
