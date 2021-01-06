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
  width: 600,
  height: 400,
};

export default function GraphDiagram(props: GraphDiagramProps) {
  const ref = useRef(null);

  // Initial Load
  useEffect(() => {
    console.log("useEffect 1");
    const svg = d3.select(ref.current);

    props.width && svg.attr("width", props.width);
    props.height & svg.attr("height", props.height);
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

    const node = svg
      .selectAll<SVGCircleElement, Node>(".node")
      .data(props.graph.nodes)
      .join("circle")
      .raise()
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
      .force(
        "center",
        d3.forceCenter(props.width / 2, props.height / 2).strength(0.00000001)
      )
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
      event.subject.fx = clamp(event.x, 0, props.width);
      event.subject.fy = clamp(event.y, 0, props.height);
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
