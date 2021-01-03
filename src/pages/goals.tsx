import Layout from "../components/layout";
import lesson from "../lessons/goals";
import Stack from "../components/stack";
import { useEffect, useState } from "react";

export default function Page() {
  const [position, setPosition] = useState(0);
  const [properties, setProperties] = useState(["name"]);

  useEffect(() => {
    console.log("X" + position);
    if (position == 0) {
      setProperties(["name"]);
    } else {
      setProperties(["name", "scale"]);
    }
  }, [position]);

  function handler(direction: number) {
    let nextPosition;
    setPosition((position) => {
      nextPosition = position + direction;
      return nextPosition;
    });
    if (nextPosition < 0 || nextPosition > 1) {
      return false;
    }
    return true;
  }

  return (
    <Layout notes={lesson.notes} transition={handler}>
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
