import Layout from "../components/layout";
import lesson from "../lessons/goals";
import Stack from "../components/stack";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

const positions = [{ properties: ["name"] }, { properties: ["name", "scale"] }];

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
          { name: "North Star" },
          { name: "Odyssey", scale: "months" },
          { name: "Quest", scale: "weeks" },
          { name: "Goal", scale: "days" },
          { name: "Change", scale: "hours" },
          { name: "Task", scale: "minutes" },
        ]}
      />
    </Layout>
  );
}
