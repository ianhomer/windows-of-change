import Layout from "../components/layout";
import lesson from "../lessons/do";
import Quote from "../components/quote";

export default function Page() {
  return (
    <Layout notes={lesson.notes}>
      <Quote who="Yoda">Do or do not. There is no try.</Quote>
    </Layout>
  );
}
