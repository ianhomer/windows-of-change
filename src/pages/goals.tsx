import Layout from "../components/layout";
import lesson from "../lessons/goals";
import Stack from "../components/stack";

export default function Page() {
  return (
    <Layout notes={lesson.notes}>
      <Stack
        properties={["name", "scale"]}
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
