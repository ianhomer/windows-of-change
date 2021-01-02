import Layout from "../components/layout";
import lesson from "../lessons/goals";
import Stack from "../components/stack";
import { useState } from "react";

export default function Page() {
  const [properties, setProperties] = useState(["name"]);

  const transition = (direction: number) => {
    console.log(`Goals : ${direction}`);
    if (direction == -1) {
      setProperties(["name"]);
    } else {
      setProperties(["name", "scale"]);
    }
    return 1;
  };
  return (
    <Layout notes={lesson.notes} transition={transition}>
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
