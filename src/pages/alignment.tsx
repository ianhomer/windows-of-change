import Layout from "../components/layout";
import Stack from "../components/stack";
import lesson from "../lessons/alignment";

export default function Page() {
  return (
    <Layout notes={lesson.notes}>
      <Stack
        layers={[
          { name: "North Star" },
          {},
          {},
          {},
          { name: "change" },
          { name: "do" },
        ]}
      />
    </Layout>
  );
}
