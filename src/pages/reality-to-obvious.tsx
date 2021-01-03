import Layout from "../components/layout";
import Stack from "../components/stack";
import lesson from "../lessons/reality-to-obvious";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

const positions = [
  { properties: ["name"] },
  { properties: ["name", "ego"] },
  { properties: ["name", "time"] },
  { properties: ["name", "ego", "time"] },
];

export default function Page() {
  const [position, setPosition] = useState(0);
  const [sky, setSky] = useState("reality");
  const [properties, setProperties] = useState(["name"]);

  useEffect(() => {
    setProperties(positions[position].properties);
    setSky(position == 0 ? "reality" : "unknowable");
  }, [position]);

  return (
    <Layout
      lesson={lesson}
      transition={transition(positions.length, setPosition)}
    >
      <Stack
        properties={properties}
        sky={sky}
        layers={[
          { name: "Experience", ego: "observable", time: "future" },
          { name: "Attention", ego: "desires", time: "plans" },
          { name: "Theories", ego: "decisions" },
          { name: "Judgments", ego: "bets" },
          { name: "Beliefs", time: "next" },
          { name: "The Obvious", ego: "knowable", time: "now" },
        ]}
      />
    </Layout>
  );
}
