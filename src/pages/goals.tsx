import Layout from "../components/layout";
import lesson from "../lessons/goals";
import Stack from "../components/stack";
import { useEffect, useState } from "react";

export default function Page() {
  const [position, setPosition] = useState(0);
  const [properties, setProperties] = useState(["name"]);

  useEffect(() => {
    if (position == 0) {
      setProperties(["name"]);
    } else {
      setProperties(["name", "scale"]);
    }
  }, [position]);

  function handler(direction: number) {
    let changed;
    setPosition((position) => {
      const nextPosition = position + direction;
      changed = nextPosition > -1 && nextPosition < 2;
      return changed ? nextPosition : position;
    });
    return changed;
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
