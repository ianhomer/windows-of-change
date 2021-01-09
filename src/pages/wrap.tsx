import Layout from "../components/layout";
import lesson from "../lessons/wrap";
import Stack from "../components/stack";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

const positions = [
  { properties: ["name"] },
  { properties: ["name", "on"] },
  { properties: ["name", "on", "visual"] },
];

export default function Page() {
  const [position, setPosition] = useState(0);
  const [properties, setProperties] = useState(["name"]);

  useEffect(() => {
    setProperties(positions[position].properties);
  }, [position]);

  return (
    <Layout
      notes={lesson.notes}
      transition={transition(positions.length, setPosition)}
    >
      <Stack
        properties={properties}
        layers={[
          {
            name: "Aligned",
            on: "goals",
            visual: "1. ground to sky stack",
          },
          {
            name: "Priotised",
            on: "value",
            visual: "2. thing change do force",
          },
          { name: "Focused", on: "now", visual: "3. dream dashboard" },
        ]}
      />
    </Layout>
  );
}
