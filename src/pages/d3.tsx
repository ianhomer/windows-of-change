import Layout from "../components/layout";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Page() {
  const ref = useRef(null);
  const data = [1, 3, 5, 7];

  useEffect(() => {
    d3.select(ref.current)
      .selectAll("p")
      .data(data)
      .enter()
      .append("p")
      .text(function (d, i) {
        return "Hello " + d + ":" + i;
      });
  }, []);

  return (
    <Layout>
      <div ref={ref} />
    </Layout>
  );
}
