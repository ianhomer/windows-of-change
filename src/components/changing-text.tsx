import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface ChaningTextProps {
  children: string;
}

export default function ChangingText(props: ChaningTextProps): JSX.Element {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current);

    svg
      .selectAll("text")
      .data("test")
      .enter()
      .append("text")
      .attr("x", (d, i) => 30 + i * 16)
      .attr("y", 30)
      .attr("stroke", "white")
      .attr("fill", "white")
      .text((d) => d);

    svg;
    //svg.selectAll("text").data(props.children).join(
    //  enter => enter.append("text").text(d => d),
    //  update => update,
    //  exit => exit.remove()
    //);

    svg.node();
  }, [props]);

  return (
    <>
      <div>{props.children}</div>
      <svg ref={ref} />
    </>
  );
}
