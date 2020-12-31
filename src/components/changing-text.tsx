import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface ChaningTextProps {
  children: string;
}

export default function ChangingText(props: ChaningTextProps): JSX.Element {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current);

    const t = svg.transition().duration(750);

    svg
      .selectAll("text")
      .data(props.children, (d) => d)
      .join(
        (enter) =>
          enter
            .append("text")
            .attr("x", (d, i) => 30 + i * 10)
            .attr("y", 0)
            .attr("stroke", "white")
            .attr("fill", "white")
            .text((d) => d)
            .call((enter) => enter.transition(t).attr("y", 60)),
        (update) =>
          update
            .attr("fill", "white")
            .attr("y", 60)
            .call((update) =>
              update.transition(t).attr("x", (d, i) => 30 + i * 10)
            ),
        (exit) =>
          exit
            .attr("fill", "brown")
            .call((exit) => exit.transition(t).attr("y", 300).remove())
      );

    svg.node();
  }, [props]);

  return (
    <>
      <svg ref={ref} />
    </>
  );
}
