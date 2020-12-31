import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Node, Graph } from "../types/graph";

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
      .classed("link", true);

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
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
      node.attr("cx", (d: Node) => d.x ?? 0).attr("cy", (d: Node) => d.y ?? 0);
    }

    function click(this: SVGCircleElement, event: any, d: Node) {
      delete d.fx;
      delete d.fy;
      d3.select(event.currentTarget).classed("fixed", false);
      simulation.alpha(1).restart();
    }

    const simulation = d3
      .forceSimulation()
      .nodes(props.graph.nodes)
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink(props.graph.links))
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
