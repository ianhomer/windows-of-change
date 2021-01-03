import Layout from "../components/layout";
import Quote from "../components/quote";
import lesson from "../lessons/happiness";

export default function Page() {
  return (
    <Layout notes={lesson.notes}>
      <Quote who="Mahatma Gandhi">
        Happiness is when what you think, what you say, and what you do are in
        harmony.
      </Quote>
    </Layout>
  );
}
