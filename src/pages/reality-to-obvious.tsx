import Layout from "../components/layout";
import Stack from "../components/stack";
import lesson from "../lessons/reality-to-obvious";

export default function Page() {
  return (
    <Layout lesson={lesson}>
      <Stack
        sky="Reality"
        layers={[
          { name: "Experience" },
          { name: "Attention" },
          { name: "Theories" },
          { name: "Judgments" },
          { name: "Beliefs" },
          { name: "The Obvious" },
        ]}
      />
    </Layout>
  );
}
