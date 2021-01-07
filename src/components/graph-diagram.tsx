import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Node, Link, Graph } from "../types/graph";

interface GraphDiagramProps {
  graph: Graph;
  className?: string;
  width?: number;
  height?: number;
}

GraphDiagram.defaultProps = {
  className: "fullscreen",
  width: 1600,
  height: 800,
};

export default function GraphDiagram(props: GraphDiagramProps) {
  const ref = useRef(null);
  const width = props.width ?? 600;
  const height = props.height ?? 400;
  const xOffset = width / 2;
  const yOffset = height / 2;

  // Initial Load
  useEffect(() => {
    console.log("useEffect 1");
    const svg = d3.select(ref.current);

    //svg.attr("width", width);
    //svg.attr("x", -width / 2);
    //svg.attr("height", height);
    //svg.attr("y", -height / 2);
    svg.attr("viewBox", `0 0 ${width} ${height}`);
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
      .attr("stroke-width", (d: Link) => d.size ?? 2);

    const group = svg
      .selectAll<SVGElement, Node>(".node")
      .data(props.graph.nodes)
      .join("g")
      .raise();

    const node = group
      .append("circle")
      .attr("r", (d: Node) => d?.size ?? 10)
      .attr("data-type", (d: Node) => d?.type ?? "unknown")
      .classed("node", true)
      .classed("fixed", (d: Node) => d.fx !== undefined);

    const text = group
      .append("text")
      .text((d: Node) => d?.label ?? null)
      .classed("label", true);

    function tick() {
      link
        .attr("x1", (d: any) => d.source.x + xOffset)
        .attr("y1", (d: any) => d.source.y + yOffset)
        .attr("x2", (d: any) => d.target.x + xOffset)
        .attr("y2", (d: any) => d.target.y + yOffset);
      text
        .attr("x", (d: Node) => (d?.x ?? 0) + xOffset + 10 + (d?.size ?? 10))
        .attr("y", (d: Node) => (d?.y ?? 0) + yOffset + 10);
      node
        .attr("cx", (d: Node) => (d?.x ?? 0) + xOffset)
        .attr("cy", (d: Node) => (d?.y ?? 0) + yOffset);
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
      .force("charge", d3.forceManyBody().strength(-10))
      .force("center", d3.forceCenter(0, 0).strength(0.1))
      .force(
        "link",
        forceLink.id((d: Node) => d.id)
      )
      .alpha(0.1)
      .alphaDecay(0)
      .on("tick", tick);

    function dragstart(this: SVGCircleElement) {
      d3.select(this).classed("fixed", true);
    }

    function clamp(x: number, low: number, high: number) {
      return x < low ? low : x > high ? high : x;
    }

    function dragged(this: SVGCircleElement, event: any) {
      event.subject.fx = clamp(event.x, -xOffset, xOffset);
      event.subject.fy = clamp(event.y, -yOffset, yOffset);
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
      <svg ref={ref} className={props.className ?? "fullscreen"} />
    </>
  );
}
