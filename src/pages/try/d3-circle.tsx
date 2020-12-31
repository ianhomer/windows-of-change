import Layout from "../../components/layout";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Page() {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", 400)
      .attr("height", 400);
    svg
      .append("circle")
      .attr("cx", 100)
      .attr("cy", 100)
      .attr("r", 50)
      .attr("stroke", "black")
      .attr("fill", "#000");
  }, []);

  return (
    <Layout>
      <div ref={ref} />
    </Layout>
  );
}
