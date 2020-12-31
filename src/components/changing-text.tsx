import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface ChaningTextProps {
  children: string;
}

export default function ChangingText(props: ChaningTextProps): JSX.Element {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current);

    const text = svg.selectAll<SVGTextElement, string>("text");

    //const transition = text.transition().duration(750);

    text
      .data(props.children, (d) => d)
      .join(
        (enter) =>
          enter
            .append("text")
            .attr("x", (d, i) => 30 + i * 10)
            .attr("y", 60)
            .attr("stroke", "white")
            .attr("fill", "white")
            .text((d) => d),
        //.call((enter) => enter.transition(transition).attr("y", 60)),
        (update) => update.attr("fill", "white").attr("y", 60),
        //.call((update) =>
        //  update.transition(transition).attr("x", (d, i) => 30 + i * 10)
        //)
        (exit) => exit.attr("fill", "brown")
        //.call((exit) => exit.transition(transition).attr("y", 300).remove())
      );

    svg.node();
  }, [props]);

  return (
    <>
      <svg ref={ref} />
    </>
  );
}
