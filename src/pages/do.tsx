import Layout from "../components/layout";
import lesson from "../lessons/do";
import Quote from "../components/quote";

export default function Page() {
  return (
    <Layout
      notes={lesson.notes}
      background="https://live.staticflickr.com/7131/7643397392_904f7007a8_b.jpg"
    >
      <Quote who="Yoda">Do or do not. There is no try.</Quote>
    </Layout>
  );
}
