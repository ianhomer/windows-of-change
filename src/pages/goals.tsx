import Layout from "../components/layout";
import lesson from "../lessons/goals";
import Stack from "../components/stack";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

const positions = [
  { properties: ["name"] },
  { properties: ["name", "what1"] },
  { properties: ["name", "what2"] },
  { properties: ["name", "what"] },
  { properties: ["name", "aka"] },
  { properties: ["name", "scale"] },
  { properties: ["name", "what", "aka", "scale"] },
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
          { name: "North Star", what: "value" },
          {
            name: "Odyssey",
            what: "alignment",
            aka: "Mission",
            scale: "months",
          },
          { name: "Quest", what: "focus", aka: "Feature", scale: "weeks" },
          { name: "Goal", what: "outcome", aka: "Epic", scale: "days" },
          {
            name: "Change",
            what1: "value",
            what2: "promise of value",
            what: "output",
            aka: "Story ; Bug ; Task",
            scale: "hours",
          },
          {
            name: "Task",
            what1: "do",
            what2: "do",
            what: "do",
            aka: "Sub-task",
            scale: "minutes",
          },
        ]}
      />
    </Layout>
  );
}
