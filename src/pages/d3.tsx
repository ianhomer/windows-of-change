import Layout from "../components/layout";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Page() {
  const ref = useRef(null);

  useEffect(() => {
    d3.select(ref.current).html("Hello");
  }, []);

  return (
    <Layout>
      <div ref={ref}>X</div>
    </Layout>
  );
}
