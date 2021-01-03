import Layout from "../components/layout";
import Stack from "../components/stack";
import lesson from "../lessons/principles";

export default function Page() {
  return (
    <Layout assets={lesson.assets} notes={lesson.notes}>
      <Stack
        layers={[
          { name: "values" },
          {},
          {},
          {},
          { name: "principles" },
          { name: "practices" },
        ]}
      />
    </Layout>
  );
}
