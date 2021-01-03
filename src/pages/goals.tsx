import Layout from "../components/layout";
import lesson from "../lessons/goals";
import Stack from "../components/stack";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

export default function Page() {
  const [position, setPosition] = useState(0);
  const [properties, setProperties] = useState(["name"]);

  const transitionHandler = transition(position, setPosition);

  useEffect(() => {
    console.log("X" + position);
    if (position == 0) {
      setProperties(["name"]);
    } else {
      setProperties(["name", "scale"]);
    }
  }, [position]);

  return (
    <Layout notes={lesson.notes} transition={transitionHandler}>
      {position}
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
