import Layout from "../../components/layout";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Page() {
  const ref = useRef(null);
  const data = [1, 3, 5, 7];

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", 200)
      .attr("height", 200);
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d, i) => 20 + (d + i) * 25)
      .attr("cy", 20)
      .attr("r", 10)
      .attr("stroke", "black")
      .attr("fill", "#000");
  }, []);

  return (
    <Layout>
      <div ref={ref} />
    </Layout>
  );
}
